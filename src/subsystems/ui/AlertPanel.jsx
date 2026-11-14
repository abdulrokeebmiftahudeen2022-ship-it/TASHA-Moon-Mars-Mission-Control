
function AlertPanel({ alerts = [] }) {
  return (
    <section className="alert-panel">
      <div className="alert-heading">
        <h2>Mission Alerts</h2>
        <span>{alerts.length} Active</span>
      </div>

      {alerts.length === 0 ? (
        <p className="no-alerts">
          All systems operating normally.
        </p>
      ) : (
        <div className="alert-list">
          {alerts.map((alert, index) => (
            <div
              className={`alert-item ${alert.status}`}
              key={alert.id || alert.sensor || alert.resource || index}
            >
              <div>
                <strong>{alert.name || alert.sensor || alert.resource}</strong>
                <p>{alert.message || "System threshold exceeded."}</p>
              </div>

              <span className="alert-status">
                {alert.status}
              </span>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default AlertPanel;
