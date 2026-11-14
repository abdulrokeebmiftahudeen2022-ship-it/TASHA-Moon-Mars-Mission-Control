
function StatusCard({ title, value, unit = "%", status = "normal" }) {
  return (
    <div className={`status-card ${status}`}>
      <div className="status-card-top">
        <h3>{title}</h3>
        <span className={`status-indicator ${status}`}>
          {status.toUpperCase()}
        </span>
      </div>

      <div className="status-value">
        {value}
        <span>{unit}</span>
      </div>

      <div className="status-bar">
        <div
          className="status-bar-fill"
          style={{
            width: `${Math.min(100, Math.max(0, value))}%`,
          }}
        />
      </div>
    </div>
  );
}

export default StatusCard;
