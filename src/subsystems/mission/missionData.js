
export const missionEvents = {
  moon: [
    {
      id: "moon-001",
      title: "Lunar Night Approaching",
      description:
        "The lunar base is approaching a long period without direct sunlight. Solar power generation will decrease.",
      options: [
        {
          id: "A",
          label: "Reduce non-essential power usage",
          effects: { power: 10, crewHealth: 0 },
          explanation:
            "Reducing unnecessary energy consumption helps preserve available power.",
        },
        {
          id: "B",
          label: "Continue normal operations",
          effects: { power: -20, crewHealth: -5 },
          explanation:
            "Continuing normal operations increases energy demand during limited generation.",
        },
      ],
    },
    {
      id: "moon-002",
      title: "Water Supply Warning",
      description:
        "The lunar base has detected an unexpected reduction in its available water supply.",
      options: [
        {
          id: "A",
          label: "Activate water recycling",
          effects: { water: 15, power: -5 },
          explanation:
            "Water recycling can help recover and conserve available water, using additional energy.",
        },
        {
          id: "B",
          label: "Maintain current consumption",
          effects: { water: -15 },
          explanation:
            "Unchanged consumption continues to reduce the available water supply.",
        },
      ],
    },
  ],

  mars: [
    {
      id: "mars-001",
      title: "Dust Storm Detected",
      description:
        "A major dust storm is affecting the Martian surface and reducing solar energy generation.",
      options: [
        {
          id: "A",
          label: "Switch to emergency power management",
          effects: { power: 10, crewHealth: 0 },
          explanation:
            "Conserving energy helps the base maintain essential operations.",
        },
        {
          id: "B",
          label: "Continue full operations",
          effects: { power: -20 },
          explanation:
            "Maintaining full operations increases energy consumption during reduced solar generation.",
        },
      ],
    },
    {
      id: "mars-002",
      title: "Life Support Pressure Warning",
      description:
        "The habitat monitoring system reports a pressure irregularity that requires investigation.",
      options: [
        {
          id: "A",
          label: "Investigate and isolate the affected system",
          effects: { oxygen: -5, power: -5, crewHealth: 5 },
          explanation:
            "Investigating the system and isolating the affected section helps protect the crew.",
        },
        {
          id: "B",
          label: "Ignore the warning",
          effects: { oxygen: -15, crewHealth: -15 },
          explanation:
            "Ignoring a life-support warning can put the crew at risk.",
        },
      ],
    },
  ],
};
