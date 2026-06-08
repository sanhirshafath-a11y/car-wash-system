import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    // Simulate auth delay
    setTimeout(() => {
      if (email === "admin@carwash.com" && password === "123456") {
        navigate("/dashboard");
      } else {
        setError("Invalid Email or Password");
      }
      setLoading(false);
    }, 500);
  };

  return (
    <div className="login-container">
      <div className="login-wrapper">
        <div className="login-card">
          <div className="login-header">
            <h1>🚗 Car Wash</h1>
            <p>Management System</p>
          </div>

          <form onSubmit={handleLogin} className="login-form">
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                id="email"
                type="email"
                placeholder="admin@carwash.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={loading}
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                disabled={loading}
              />
            </div>

            {error && <div className="form-error">{error}</div>}

            <button type="submit" disabled={loading} className="login-btn">
              {loading ? "Signing in..." : "Sign In"}
            </button>
          </form>

          <div className="login-footer">
            <p>Demo: admin@carwash.com / 123456</p>
          </div>
        </div>

        <div className="login-hero">
          <div className="hero-content">
            <h2>Welcome Back</h2>
            <p>Manage your car wash business efficiently</p>
            <ul className="features">
              <li>✓ Easy booking management</li>
              <li>✓ Real-time status tracking</li>
              <li>✓ Customer overview</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;