import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <div className="navbar">
      <h2>🚗 Car Wash</h2>

      <div className="nav-links">
       <Link to="/dashboard">Dashboard</Link>
<Link to="/bookings">Bookings</Link>
<Link to="/add-booking">Add Booking</Link>

        <button
          onClick={handleLogout}
          className="logout-btn"
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Navbar;