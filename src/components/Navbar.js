import React from "react";
import { Link } from "react-router-dom";
import ProfileDropdown from "./ProfileDropdown"; // Ensure this is the correct path to ProfileDropdown component
import "./Navbar.css"; // Create this CSS file for styling

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-content">
        <div className="navbar-text-logo">
          <img
            src="https://res.cloudinary.com/dyutmmnia/image/upload/v1721361644/uwn00dkduoeqgbvzexsn.png"
            alt="Sri Mandir"
            className="navbar-logo"
          />
          <h2 className="navbar-text">Sri Mandir</h2>
        </div>
        <nav className="navbar-nav">
          <Link to="/" className="nav-link">
            <strong>Home</strong>
          </Link>
          <Link to="/puja" className="nav-link">
            <strong>Puja</strong>
          </Link>
          <Link to="/panchang" className="nav-link">
            <strong>Panchang</strong>
          </Link>
          <Link to="/temples" className="nav-link">
            <strong>Temples</strong>
          </Link>
          <Link to="/library" className="nav-link">
            <strong>Library</strong>
          </Link>
        </nav>
        <div className="navbar-right">
          <ProfileDropdown />
        </div>
      </div>
    </header>
  );
}

export default Navbar;
