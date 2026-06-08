import Navbar from "../components/Navbar";

function Dashboard() {
  const stats = [
    { label: "Total Bookings", value: "25", icon: "📊", color: "gradient-primary" },
    { label: "Waiting", value: "12", icon: "⏳", color: "gradient-warning" },
    { label: "Washing", value: "8", icon: "🚿", color: "gradient-info" },
    { label: "Completed", value: "5", icon: "✅", color: "gradient-success" }
  ];

  return (
    <>
      <Navbar />

      <div className="container">
        <div className="dashboard-header">
          <h1>📊 Dashboard</h1>
          <p>Overview of your car wash operations</p>
        </div>

        <div className="stats-grid">
          {stats.map((stat, idx) => (
            <div key={idx} className={`stat-card ${stat.color}`}>
              <div className="stat-icon">{stat.icon}</div>
              <div className="stat-content">
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="dashboard-section">
          <h2>Quick Actions</h2>
          <div className="action-buttons">
            <a href="/add-booking" className="action-btn btn-primary">
              ➕ Add Booking
            </a>
            <a href="/bookings" className="action-btn btn-secondary">
              📋 View All Bookings
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;