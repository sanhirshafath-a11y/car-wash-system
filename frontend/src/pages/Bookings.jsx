import Navbar from "../components/Navbar";
import BookingCard from "../components/BookingCard";
import { useState } from "react";

function Bookings() {
  const [bookings] = useState([
    {
      id: 1,
      customer: "Nimal",
      vehicle: "ABC-1234",
      packageType: "Premium Wash",
      price: "₹450",
      status: "Waiting"
    },
    {
      id: 2,
      customer: "Akash",
      vehicle: "XYZ-5678",
      packageType: "Full Wash",
      price: "₹650",
      status: "Washing"
    },
    {
      id: 3,
      customer: "Ravi",
      vehicle: "LMN-9012",
      packageType: "Basic Wash",
      price: "₹300",
      status: "Done"
    },
    {
      id: 4,
      customer: "Priya",
      vehicle: "DEF-3456",
      packageType: "Premium Wash",
      price: "₹450",
      status: "Waiting"
    }
  ]);

  const statusStats = {
    waiting: bookings.filter(b => b.status === "Waiting").length,
    washing: bookings.filter(b => b.status === "Washing").length,
    done: bookings.filter(b => b.status === "Done").length
  };

  return (
    <>
      <Navbar />

      <div className="container">
        <div className="bookings-header">
          <h1>📋 Bookings</h1>
          <p>Manage all car wash bookings</p>
        </div>

        <div className="status-filter">
          <div className="filter-stat">
            <span className="badge badge-warning">{statusStats.waiting}</span> Waiting
          </div>
          <div className="filter-stat">
            <span className="badge badge-info">{statusStats.washing}</span> Washing
          </div>
          <div className="filter-stat">
            <span className="badge badge-success">{statusStats.done}</span> Completed
          </div>
        </div>

        <div className="bookings-list">
          {bookings.map((booking) => (
            <BookingCard
              key={booking.id}
              id={booking.id}
              customer={booking.customer}
              vehicle={booking.vehicle}
              packageType={booking.packageType}
              price={booking.price}
              status={booking.status}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Bookings;