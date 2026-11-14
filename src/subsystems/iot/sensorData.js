
export const sensorProfiles = {
  moon: {
    oxygen: {
      name: "Oxygen Level",
      unit: "%",
      value: 98,
      warning: 90,
      critical: 80,
    },
    temperature: {
      name: "Habitat Temperature",
      unit: "°C",
      value: 22,
      warning: 28,
      critical: 35,
    },
    pressure: {
      name: "Habitat Pressure",
      unit: "kPa",
      value: 101,
      warning: 95,
      critical: 85,
    },
    radiation: {
      name: "Radiation Level",
      unit: "µSv/h",
      value: 0.3,
      warning: 0.5,
      critical: 1.0,
    },
  },

  mars: {
    oxygen: {
      name: "Oxygen Level",
      unit: "%",
      value: 98,
      warning: 90,
      critical: 80,
    },
    temperature: {
      name: "Habitat Temperature",
      unit: "°C",
      value: 21,
      warning: 28,
      critical: 35,
    },
    pressure: {
      name: "Habitat Pressure",
      unit: "kPa",
      value: 100,
      warning: 95,
      critical: 85,
    },
    radiation: {
      name: "Radiation Level",
      unit: "µSv/h",
      value: 0.4,
      warning: 0.5,
      critical: 1.0,
    },
  },
};
