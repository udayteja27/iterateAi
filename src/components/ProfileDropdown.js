import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./ProfileDropdown.css";
import {
  FaUser,
  FaCalendar,
  FaCalendarCheck,
  FaPray,
  FaPhone,
  FaEnvelope,
  FaWhatsapp,
} from "react-icons/fa";

const ProfileDropdown = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <div className="profile-dropdown">
      <button className="profile-btn" onClick={toggleDropdown}>
        <FaUser size={20} />
      </button>
      {dropdownVisible && (
        <div className="profile-content">
          <div className="welcome-section">
            <h3>Hello, Sri Mandir Bhakt</h3>
            <p>Welcome to Sri Mandir Puja Seva</p>
            <div className="account-details">
              <Link to="/profile" className="profile-link">
                <FaUser /> My profile
              </Link>
              <Link to="/profile/bookings" className="profile-link">
                <FaCalendar /> My Puja Bookings
              </Link>
              <Link to="/ramotsav-bookings" className="profile-link">
                <FaCalendarCheck /> My Ramotsav Bookings
              </Link>
              <Link to="/book-puja" className="profile-link">
                <FaPray /> Book a Puja <span className="new-badge">New</span>
              </Link>
            </div>
            <div className="help-support">
              <h3>Help & Support for Puja Booking</h3>
              <div className="support-item">
                <FaPhone />
                <span>080-711-74417</span>
                <p>You can call us from 10:30 AM - 7:30 PM</p>
              </div>
              <div className="support-item">
                <FaEnvelope />
                <span>Email us</span>
              </div>
              <div className="support-item">
                <FaWhatsapp />
                <span>Whatsapp us</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileDropdown;
