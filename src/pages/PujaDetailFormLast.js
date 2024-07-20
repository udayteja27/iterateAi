import React, { useState } from "react";

const DetailsForm = () => {
  const [formDetails, setFormDetails] = useState({
    phoneNumber: "",
    differentNumber: "",
    firstMemberName: "",
    secondMemberName: "",
    gotra: "",
    receivePrasad: "Yes",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleFinalSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
  };

  // Styles
  const containerStyle = {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    padding: "20px",
    boxSizing: "border-box",
    gap: "20px",
  };

  const boxModelStyle = {
    flex: 1,
    maxWidth: "400px",
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "5px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    boxSizing: "border-box",
  };

  const formStyle = {
    flex: 2,
    display: "flex",
    flexDirection: "column",
    width: "100%",
  };

  const labelStyle = {
    marginBottom: "15px",
    display: "flex",
    flexDirection: "column",
  };

  const inputStyle = {
    width: "100%",
    padding: "10px",
    marginTop: "5px",
    boxSizing: "border-box",
  };

  const buttonStyle = {
    padding: "10px 20px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginTop: "10px",
  };

  const buttonHoverStyle = {
    backgroundColor: "#0056b3",
  };
  const span = {
    fontsize: "120px",
  };

  return (
    <div style={containerStyle}>
      <form onSubmit={handleFinalSubmit} style={formStyle}>
        <h4>
          <span style={span}>&#8678;</span>Customer Details
        </h4>
        <label style={labelStyle}>
          Your WhatsApp Number:
          <input
            type="text"
            name="phoneNumber"
            value={formDetails.phoneNumber}
            onChange={handleInputChange}
            style={inputStyle}
          />
        </label>
        <p>
          Your Puja booking updates like Puja Photos, Videos, and other details
          will be sent on WhatsApp on the above number.
        </p>
        <label style={labelStyle}>
          I have a different number for calling:
          <input
            type="text"
            name="differentNumber"
            value={formDetails.differentNumber}
            onChange={handleInputChange}
            placeholder="+91 Different Number"
            style={inputStyle}
          />
        </label>
        <label style={labelStyle}>
          Name of members participating in Puja:
          <input
            type="text"
            name="firstMemberName"
            value={formDetails.firstMemberName}
            onChange={handleInputChange}
            placeholder="First Member Name"
            style={inputStyle}
          />
          <input
            type="text"
            name="secondMemberName"
            value={formDetails.secondMemberName}
            onChange={handleInputChange}
            placeholder="Second Member Name"
            style={inputStyle}
          />
        </label>
        <label style={labelStyle}>
          Fill participant’s gotra:
          <input
            type="text"
            name="gotra"
            value={formDetails.gotra}
            onChange={handleInputChange}
            placeholder="Gotra"
            style={inputStyle}
          />
        </label>
        <label style={labelStyle}>
          Do you want to get puja prasad?
          <select
            name="receivePrasad"
            value={formDetails.receivePrasad}
            onChange={handleInputChange}
            style={inputStyle}
          >
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </label>
        <button
          type="submit"
          style={buttonStyle}
          onMouseOver={(e) =>
            (e.currentTarget.style.backgroundColor =
              buttonHoverStyle.backgroundColor)
          }
          onMouseOut={(e) =>
            (e.currentTarget.style.backgroundColor =
              buttonStyle.backgroundColor)
          }
        >
          Proceed to Book
        </button>
      </form>
      <div style={boxModelStyle}>
        <h4>Puja Details</h4>
        <p>
          <strong>Package:</strong> Partner Puja
        </p>
        <p>
          <strong>₹ 1251</strong>
        </p>
        <p>
          <strong>Temple Venue:</strong> Maa Bagalamukhi Temple, Haridwar,
          Uttarakhand
        </p>
        <p>
          <strong>Puja Date:</strong> 21 July, Sunday, Ashadha Shukla
          Chaturdashi
        </p>
        <p>
          Mahavidya Purnima Special Maa Bagalamukhi Tantra Yukta Havan for
          Victory in Court Cases and Victory over Enemies
        </p>
      </div>
    </div>
  );
};

export default DetailsForm;
