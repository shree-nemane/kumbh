export function mapBackendAlert(raw) {
  const event = raw.event;
  const data = raw.data || {};

  switch (event) {
    case "panic":
      return {
        type: "panic",
        title: "Panic Detected",
        message: `Sudden movement detected (magnitude: ${data.magnitude?.toFixed?.(2) || "?"})`
      };

    case "overcrowd":
      return {
        type: "warning",
        title: "Overcrowding Alert",
        message: `Number of people exceeded the threshold: ${data.count}`
      };

    case "proximity_violation":
      return {
        type: "warning",
        title: "Proximity Violation",
        message: `${data.violations} people are too close to each other`
      };

    default:
      return {
        type: "info",
        title: "Unknown Alert",
        message: JSON.stringify(data)
      };
  }
}
