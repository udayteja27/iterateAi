import React from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa"; // Import the left arrow icon
import "./PujaBookings.css";

function PujaBookings() {
  const bookings = []; // Empty array to simulate no bookings

  return (
    <div className="container">
      <Link to="/puja" className="back-link">
        <FaArrowLeft size={24} />
      </Link>
      <div className="content">
        {bookings.length === 0 ? (
          <div>
            <h2>No bookings found</h2>
            <h3>
              Book your Puja online at Popular Temples of India.
              <br />
              Panditji will take sankalp with your name and gotra
              <br />
              during the Puja
            </h3>
            <Link to="/puja">
              <button>Book a Puja</button>
            </Link>
          </div>
        ) : (
          <ul>
            {bookings.map((booking, index) => (
              <li key={index}>{booking}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default PujaBookings;
