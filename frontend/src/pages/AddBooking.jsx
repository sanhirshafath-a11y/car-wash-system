import Navbar from "../components/Navbar";
import { useState, useEffect } from "react";
import axios from "axios";

function AddBooking() {
  const [form, setForm] = useState({
    customer_name: "",
    vehicle_number: "",
    package_type: "Basic Wash",
    price: ""
  });

  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (successMessage || errorMessage) {
      const t = setTimeout(() => {
        setSuccessMessage("");
        setErrorMessage("");
      }, 3500);
      return () => clearTimeout(t);
    }
  }, [successMessage, errorMessage]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");

    try {
      const payload = {
        ...form,
        price: Number(form.price) // ensure backend gets number
      };

      const res = await axios.post(
        "http://127.0.0.1:8000/api/bookings",
        payload,
        {
          headers: {
            "Content-Type": "application/json"
          }
        }
      );

      console.log("SUCCESS RESPONSE:", res.data);

      setSuccessMessage("Booking added successfully");

      setForm({
        customer_name: "",
        vehicle_number: "",
        package_type: "Basic Wash",
        price: ""
      });

    } catch (error) {
      console.log("FULL ERROR:", error);

      if (error.response) {
        console.log("Backend Response:", error.response.data);
        setErrorMessage(error.response.data.message || "Backend Error Adding Booking");
      } else if (error.request) {
        setErrorMessage("No response from server. Check backend/CORS.");
      } else {
        setErrorMessage("Error Adding Booking");
      }

    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />

      <div className="booking-form-container">
        <div className="booking-form-card">

          <h1>🚗 Add New Booking</h1>

          <div className="package-info">
            Select wash package and enter customer details.
          </div>

          <form className="booking-form" onSubmit={handleSubmit}>

            <input
              type="text"
              name="customer_name"
              placeholder="Customer Name"
              value={form.customer_name}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="vehicle_number"
              placeholder="Vehicle Number"
              value={form.vehicle_number}
              onChange={handleChange}
              required
            />

            <select
              name="package_type"
              value={form.package_type}
              onChange={handleChange}
            >
              <option value="Basic Wash">Basic Wash</option>
              <option value="Premium Wash">Premium Wash</option>
              <option value="Full Wash">Full Wash</option>
            </select>

            <input
              type="number"
              name="price"
              placeholder="Price"
              value={form.price}
              onChange={handleChange}
              required
            />
  
            <button type="submit" disabled={loading} className="primary-btn">
              {loading ? (
                <span className="btn-content"><span className="spinner" aria-hidden></span> Saving...</span>
              ) : (
                "Save Booking"
              )}
            </button>

          </form>

        </div>
      </div>

      {successMessage && (
        <div className="toast success">{successMessage}</div>
      )}

      {errorMessage && (
        <div className="toast error">{errorMessage}</div>
      )}
    </>
  );
}

export default AddBooking;
