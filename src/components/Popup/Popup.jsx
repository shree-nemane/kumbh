import React, { useContext, useEffect } from "react";
import { AlertContext } from "../../context/AlertContext";
import { motion, AnimatePresence } from "framer-motion";

/**
 * Responsive toast-style alert popup
 * - Non-blocking (floats on top-right on desktop, bottom-center on mobile)
 * - Auto-dismisses after 5 seconds
 * - Includes smooth slide & fade animation
 * - Color-coded for alert type
 */
const AlertPopup = () => {
  const { alert, closeAlert } = useContext(AlertContext);

  // Auto close after 5s
  useEffect(() => {
    if (alert) {
      const timer = setTimeout(() => closeAlert(), 5000);
      return () => clearTimeout(timer);
    }
  }, [alert, closeAlert]);

  if (!alert) return null;

  // Define alert type color styles
  const alertColors = {
    panic: "bg-red-600 text-white border-red-400",
    warning: "bg-yellow-400 text-black border-yellow-500",
    info: "bg-blue-600 text-white border-blue-400",
    success: "bg-green-600 text-white border-green-400",
    default: "bg-gray-800 text-white border-gray-600",
  };

  const colorClass = alertColors[alert.type] || alertColors.default;

  return (
    <AnimatePresence>
      <motion.div
        key="alert"
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 40, scale: 0.95 }}
        transition={{ duration: 0.25 }}
        className={`fixed z-[1000] flex justify-center sm:justify-end px-3 sm:px-5 w-full sm:w-auto`}
        style={{
          bottom: "1rem", // bottom for mobile
          right: "1rem",  // top-right for desktop
        }}
        role="alert"
        aria-live="assertive"
      >
        <div
          className={`rounded-xl shadow-2xl border-l-4 ${colorClass} w-full sm:w-96 max-w-sm p-4 sm:p-5`}
        >
          <div className="flex items-start justify-between gap-3">
            <div className="flex-1">
              <h3 className="text-base sm:text-lg font-semibold flex items-center gap-2">
                {alert.type === "panic" && "🚨"}
                {alert.type === "warning" && "⚠️"}
                {alert.type === "success" && "✅"}
                {alert.type === "info" && "ℹ️"}
                {alert.title || "Alert"}
              </h3>

              <p className="text-sm sm:text-base mt-1 leading-snug break-words">
                {alert.message ||
                  "Something important happened. Please check the system."}
              </p>
            </div>

            <button
              onClick={closeAlert}
              aria-label="Close alert"
              className="text-xl font-bold hover:opacity-70 focus:outline-none"
            >
              &times;
            </button>
          </div>

          {/* Animated progress bar */}
          <motion.div
            initial={{ width: "100%" }}
            animate={{ width: 0 }}
            transition={{ duration: 5, ease: "linear" }}
            className="h-1 mt-3 bg-white/40 rounded-full"
          />
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default AlertPopup;
