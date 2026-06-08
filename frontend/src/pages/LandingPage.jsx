import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div className="landing-page">
      <div className="landing-hero">
        <div className="hero-content">
          <h1 className="hero-title">🚗 Car Wash Management</h1>
          <p className="hero-subtitle">
            Professional car wash booking and management system
          </p>
          <p className="hero-description">
            Streamline your car wash operations with our intuitive platform.
            Manage bookings, track status, and delight your customers.
          </p>

          <div className="hero-buttons">
            <Link to="/login" className="btn btn-primary btn-lg">
              Get Started
            </Link>
            <a href="#features" className="btn btn-outline btn-lg">
              Learn More
            </a>
          </div>
        </div>

        <div className="hero-image">
          <div className="hero-icon">🏎️</div>
        </div>
      </div>

      <section className="features" id="features">
        <h2>Features</h2>
        <div className="feature-grid">
          <div className="feature-card">
            <div className="feature-icon">📅</div>
            <h3>Easy Booking</h3>
            <p>Create and manage car wash bookings with just a few clicks</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📊</div>
            <h3>Dashboard</h3>
            <p>Get real-time insights and analytics of your operations</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📱</div>
            <h3>Responsive Design</h3>
            <p>Access from any device - desktop, tablet, or mobile</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">⚡</div>
            <h3>Fast & Reliable</h3>
            <p>Lightning-fast performance with secure data management</p>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <h2>Ready to Transform Your Car Wash Business?</h2>
        <p>Join hundreds of car wash businesses using our system</p>
        <Link to="/login" className="btn btn-primary btn-lg">
          Start Free Today
        </Link>
      </section>
    </div>
  );
}

export default LandingPage;