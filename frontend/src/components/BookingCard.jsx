function BookingCard({ id, customer, vehicle, packageType, price, status }) {
  const getStatusClass = (status) => {
    switch (status) {
      case "Waiting":
        return "status-waiting";
      case "Washing":
        return "status-washing";
      case "Done":
        return "status-done";
      default:
        return "";
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "Waiting":
        return "⏳";
      case "Washing":
        return "🚿";
      case "Done":
        return "✅";
      default:
        return "📌";
    }
  };

  return (
    <div className="booking-card">
      <div className="booking-card-header">
        <div className="booking-customer">
          <h3>{customer}</h3>
          <p className="booking-vehicle">🚗 {vehicle}</p>
        </div>
        <div className={`booking-status ${getStatusClass(status)}`}>
          <span className="status-icon">{getStatusIcon(status)}</span>
          <span className="status-text">{status}</span>
        </div>
      </div>

      <div className="booking-card-body">
        <div className="booking-detail">
          <span className="detail-label">Package:</span>
          <span className="detail-value">{packageType}</span>
        </div>
        <div className="booking-detail">
          <span className="detail-label">Price:</span>
          <span className="detail-value price">{price}</span>
        </div>
      </div>

      <div className="booking-card-footer">
        <button className="btn-small btn-edit">✏️ Edit</button>
        <button className="btn-small btn-delete">🗑️ Delete</button>
      </div>
    </div>
  );
}

export default BookingCard;