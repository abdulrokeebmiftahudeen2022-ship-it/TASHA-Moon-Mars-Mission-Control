
function MissionSelector({ selectedMission = "moon", onSelect }) {
  const missions = [
    {
      id: "moon",
      name: "Moon Mission",
      description: "Explore and manage a lunar base.",
      icon: "🌕",
    },
    {
      id: "mars",
      name: "Mars Mission",
      description: "Explore and manage a Martian base.",
      icon: "🔴",
    },
  ];

  return (
    <section className="mission-selector">
      <h2>Select Your Mission</h2>

      <div className="mission-options">
        {missions.map((mission) => (
          <button
            key={mission.id}
            type="button"
            className={`mission-option ${
              selectedMission === mission.id ? "selected" : ""
            }`}
            onClick={() => onSelect?.(mission.id)}
          >
            <span className="mission-icon">{mission.icon}</span>

            <div>
              <h3>{mission.name}</h3>
              <p>{mission.description}</p>
            </div>

            {selectedMission === mission.id && (
              <span className="selected-label">SELECTED</span>
            )}
          </button>
        ))}
      </div>
    </section>
  );
}

export default MissionSelector;
