
import {
  getSensorReadings,
  getSensorAlerts,
  simulateSensorUpdate,
} from "./iotLogic";

const readings = getSensorReadings("moon");

console.log("Initial Sensor Readings:", readings);
console.log("Sensor Alerts:", getSensorAlerts(readings));

const updated = simulateSensorUpdate("moon", readings);

console.log("Updated Sensor Readings:", updated);
