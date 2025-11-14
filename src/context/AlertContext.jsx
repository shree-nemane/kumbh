import React, {
  createContext,
  useState,
  useEffect,
  useCallback,
  useRef,
} from "react";
import { mapBackendAlert } from "../utils/mapAlert";

export const AlertContext = createContext();

export const AlertProvider = ({ children }) => {
  const [alert, setAlert] = useState(null);
  const [isConnected, setIsConnected] = useState(false);
  const [lastError, setLastError] = useState(null);
  const socketRef = useRef(null);
  const reconnectTimer = useRef(null);

  // Use environment variable if available (useful for prod/staging)
  const WS_URL =
    (typeof process !== "undefined" &&
      process.env &&
      process.env.REACT_APP_ALERT_WS_URL) ||
    import.meta.env.VITE_ALERT_WS_URL ||
    "ws://localhost:8000";


  // --- Establish or re-establish WebSocket connection ---
  const connectWebSocket = useCallback(() => {
    try {
      console.log(`🌐 Attempting to connect to ${WS_URL}...`);

      const socket = new WebSocket(WS_URL);
      socketRef.current = socket;

      socket.onopen = () => {
        console.log("✅ Connected to alert stream:", WS_URL);
        setIsConnected(true);
        setLastError(null);
      };

      socket.onmessage = (event) => {
        try {
          const raw = JSON.parse(event.data);
          console.log("🚨 Raw alert received:", raw);

          const mapped = mapBackendAlert(raw);
          console.log("🎯 Mapped alert:", mapped);

          setAlert(mapped); // <-- Now popup gets correct structure!
        } catch (err) {
          console.error("❌ Error parsing alert:", err);
        }
      };

      socket.onclose = (event) => {
        console.warn("⚠️ WebSocket closed:", event.code, event.reason);
        setIsConnected(false);
        scheduleReconnect();
      };

      socket.onerror = (error) => {
        console.error("❌ WebSocket connection error:", error);
        setLastError("Connection failed. Retrying...");
        setIsConnected(false);
        socket.close();
      };
    } catch (err) {
      console.error("💥 Failed to initialize WebSocket:", err);
      setLastError("WebSocket init error");
      scheduleReconnect();
    }
  }, [WS_URL]);

  // --- Try to reconnect after 5 seconds ---
  const scheduleReconnect = useCallback(() => {
    if (reconnectTimer.current) return;
    console.log("⏳ Scheduling reconnect in 5 seconds...");
    reconnectTimer.current = setTimeout(() => {
      reconnectTimer.current = null;
      connectWebSocket();
    }, 5000);
  }, [connectWebSocket]);

  // --- Close alert manually ---
  const closeAlert = useCallback(() => setAlert(null), []);

  // --- Lifecycle management ---
  useEffect(() => {
    connectWebSocket();
    return () => {
      if (reconnectTimer.current) clearTimeout(reconnectTimer.current);
      if (socketRef.current && socketRef.current.readyState === WebSocket.OPEN) {
        socketRef.current.close();
      }
    };
  }, [connectWebSocket]);

  return (
    <AlertContext.Provider
      value={{
        alert,
        closeAlert,
        isConnected,
        lastError,
      }}
    >
      {children}
    </AlertContext.Provider>
  );
};
