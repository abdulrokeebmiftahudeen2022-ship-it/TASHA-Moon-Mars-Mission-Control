
export const environments = {
  moon: {
    id: "moon",
    name: "Moon",
    gravity: 1.62,
    atmosphere: "Almost no atmosphere",
    temperature: {
      day: 127,
      night: -173,
    },
    hazards: [
      "Extreme temperature changes",
      "Solar radiation",
      "Lunar dust",
      "Limited water resources",
    ],
  },

  mars: {
    id: "mars",
    name: "Mars",
    gravity: 3.71,
    atmosphere: "Thin carbon dioxide atmosphere",
    temperature: {
      average: -63,
    },
    hazards: [
      "Dust storms",
      "Low atmospheric pressure",
      "Extreme cold",
      "Radiation exposure",
    ],
  },
};
