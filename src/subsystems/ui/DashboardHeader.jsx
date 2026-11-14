function DashboardHeader({ mission = "Moon Mission" }) {
  return (
    <header className="dashboard-header">
      <div>
        <h1>TASHA</h1>
        <p>Mission Control System</p>
      </div>

      <div className="mission-label">
        {mission}
      </div>
    </header>
  );
}

export default DashboardHeader;