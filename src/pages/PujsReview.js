import React from "react";
import { Link } from "react-router-dom";
const ReviewBooking = () => {
  const handleContinue = () => {
    // Your continue function logic here
    console.log("Continue button clicked");
  };

  const styles = {
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
    },
    box: {
      border: "1px solid #ccc",
      borderRadius: "8px",
      padding: "20px",
      width: "300px",
      textAlign: "center",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    },
    heading: {
      marginBottom: "20px",
    },
    details: {
      marginBottom: "10px",
    },
    button: {
      padding: "10px 20px",
      backgroundColor: "#007BFF",
      color: "#fff",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
    },
    buttonHover: {
      backgroundColor: "#0056b3",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.box}>
        <h3 style={styles.heading}>Review Booking</h3>
        <p>
          Saturday Shani Shingnapur Special Shani Saade Saati Peeda Shanti
          Mahapuja and Til Tel Abhishek for Prevention of Misfortunes and
          Adversities
        </p>
        <p style={styles.details}>
          <strong>Package:</strong> Partner Puja
        </p>
        <p style={styles.details}>
          <strong>Amount:</strong> ₹1251
        </p>
        <h4 style={styles.details}>Apply Coupon</h4>
        <p style={styles.details}>
          <strong>Bill Details:</strong>
        </p>
        <p style={styles.details}>Partner Puja: ₹1251.0</p>
        <p style={styles.details}>Total Amount: ₹1251.0</p>
        <Link to="/Puja-Detail-Form-Last">
          <button
            style={styles.button}
            onClick={handleContinue}
            onMouseEnter={(e) =>
              (e.target.style.backgroundColor =
                styles.buttonHover.backgroundColor)
            }
            onMouseLeave={(e) =>
              (e.target.style.backgroundColor = styles.button.backgroundColor)
            }
          >
            Continue
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ReviewBooking;
