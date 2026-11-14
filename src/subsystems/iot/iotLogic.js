
import { sensorProfiles } from "./sensorData";

export function getSensorReadings(environment) {
  const profile = sensorProfiles[environment];

  if (!profile) return null;

  return Object.fromEntries(
    Object.entries(profile).map(([key, sensor]) => [
      key,
      {
        ...sensor,
        status: getSensorStatus(key, sensor.value),
      },
    ])
  );
}

export function getSensorStatus(sensor, value) {
  const profile = Object.values(sensorProfiles)
    .map((environment) => environment[sensor])
    .find(Boolean);

  if (!profile) return "unknown";

  const { warning, critical } = profile;

  if (sensor === "temperature") {
    if (value >= critical) return "critical";
    if (value >= warning) return "warning";
    return "normal";
  }

  if (value <= critical) return "critical";
  if (value <= warning) return "warning";

  return "normal";
}

export function getSensorAlerts(readings) {
  if (!readings) return [];

  return Object.entries(readings)
    .filter(([, sensor]) => sensor.status !== "normal")
    .map(([key, sensor]) => ({
      sensor: key,
      name: sensor.name,
      value: sensor.value,
      unit: sensor.unit,
      status: sensor.status,
    }));
}

export function simulateSensorUpdate(environment, previousReadings) {
  const profile = sensorProfiles[environment];

  if (!profile) return null;

  const previous = previousReadings || getSensorReadings(environment);

  return Object.fromEntries(
    Object.entries(profile).map(([key, sensor]) => {
      const current = previous?.[key]?.value ?? sensor.value;

      // Small deterministic changes for a repeatable demo.
      const change = key === "temperature" ? 1 : -1;
      const value = Math.max(0, current + change);

      return [
        key,
        {
          ...sensor,
          value,
          status: getSensorStatus(key, value),
        },
      ];
    })
  );
}
