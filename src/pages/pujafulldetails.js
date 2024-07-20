import React, { useState, useEffect } from "react";
import "./Pujafulldetails.css";
import { Link } from "react-router-dom";

const PujaComponent = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [formDetails, setFormDetails] = useState({
    phoneNumber: "",
    name: "",
    firstMemberName: "",
    secondMemberName: "",
    gotra: "",
    differentNumber: "",
    receivePrasad: "Yes",
  });
  const [showReview, setShowReview] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  function calculateTimeLeft() {
    const difference = +new Date("2024-8-21") - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  }

  const timeComponents = Object.keys(timeLeft).map((interval) => {
    if (!timeLeft[interval]) {
      return null;
    }

    return (
      <span key={interval}>
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
  });

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    setShowReview(true);
    // Navigate to review or handle form submission here
  }

  return (
    <div className="puja-container">
      <div className="puja-header">
        <div className="puja-left">
          <img
            src="https://res.cloudinary.com/dyutmmnia/image/upload/v1721371287/utzvqzeu9uqkhusaxnwe.png"
            alt="pujaimage"
            className="image7"
          />
        </div>
        <div className="puja-details">
          <h2>
            Saturday Shani Shingnapur Special Shani Saade Saati Peeda Shanti
            Mahapuja and Til Tel Abhishek
          </h2>
          <h3> Prevention of Misfortunes and Adversities</h3>
          <p>
            {" "}
            📍temple venue Shanidev Temple, Shani Shingnapur, Maharashtra pooja
            date
            <br /> 📅 20 July, Saturday, Ashadha Shukla Chaturdashi
          </p>
          <p>
            <strong>Date:</strong> 20th July, 2024
          </p>
          <div className="countdown">
            {timeComponents.length ? timeComponents : <span>Time's up!</span>}
          </div>
          <a href="#package">
            <button
              className="puja-button"
              onClick={() => setShowReview(false)}
            >
              Select puja package
            </button>
          </a>
        </div>
      </div>
      <div className="links-row">
        <a href="#about">About Puja</a>
        <a href="#benefit">Benefits</a>
        <a href="#process">Process</a>
        <a href="#templedetail">Temple Details</a>
        <a href="#package">Packages</a>
        <a href="#completepuja">Complete Puja</a>
        <a href="#faqs">FAQs</a>
      </div>
      <div className="section-content">
        <div id="about" className="card">
          <h3>About Puja</h3>
          <p>
            Saturday Shani Shingnapur Special Shani Saade Saati Peeda Shanti
            Mahapuja and Til Tel Abhishek for Prevention of Misfortunes and
            Adversities
          </p>
          <p>
            The Shani Shingnapur Temple in Maharashtra is considered the world's
            biggest Shani temple...
          </p>
          <p>
            The Shani Shingnapur Temple in Maharashtra is considered the world's
            biggest Shani temple. This temple of Lord Shani is known as the
            'Jagrut Devasthan', meaning Shani Dev himself resides here in the
            form of a stone idol. According to religious beliefs, performing
            Shani Puja and offering Til Tel at this ancient temple can provide
            relief from the effects of Shani Saade Saati. Shani Saade Saati is
            often considered unfavourable, with its impact divided into three
            phases of two and a half years each. During the initial phase of
            Saade Saati, Shani affects the mind of an individual which may cause
            financial and emotional challenges. The second phase of Saade Saati
            is considered the most challenging which can bring physical
            troubles. Its consequences can also affect an individual's family
            and professional life. In the final phase of Shani Saade Saati, a
            person may face various struggles, affecting them physically,
            mentally, and financially. Various types of worship are performed to
            reduce the malefic effects of Lord Shani, among which Shani Saade
            Saati Peeda Shanti Mahapuja and Til Tel Abhishek are extremely
            effective. Just as each deity has a special day, Saturday is
            dedicated to Lord Shani, and on this day, performing the Shani Saade
            Saati Peeda Shanti Mahapuja and Til Tel Abhishek are considered
            highly fruitful. Therefore, participate in this puja through Sri
            Mandir and attain the special grace of Lord Shani.
          </p>
        </div>
        <div id="benefit" className="card">
          <h3>Benefits</h3>
          <p>
            The Shani Saade Saati Peeda Shanti Mahapuja and Til Tel Abhishek are
            believed to bring numerous benefits...
          </p>
        </div>
        <div id="process" className="card">
          <h3>Process</h3>
          <p>
            The process of Shani Saade Saati Peeda Shanti Mahapuja and Til Tel
            Abhishek includes:
          </p>
          <ol>
            <li>Preparation and purification rituals.</li>
            <li>Offerings of Til Tel and other items to the deity.</li>
            <li>Recitation of specific prayers and mantras.</li>
            <li>Special ceremonies and rituals conducted by the priests.</li>
          </ol>
        </div>
        <div id="templedetail" className="card">
          <h3>Temple Details</h3>
          <p>
            The Shree Shanidev Temple is located in Shani Shingnapur,
            Maharashtra...
          </p>
          <p>
            <strong>Address:</strong> Shani Shingnapur, Maharashtra, India
          </p>
          <p>
            <strong>Contact:</strong> [Temple contact information]
          </p>
        </div>
        <div id="package" className="cardpuja">
          <div className="card1">
            <h3 className="headpuja">₹831</h3>
            <p className="headpuja">Individual Package</p>
            <p className="headpuja">Package for 1 Person</p>
            <li>
              Pandit ji will call out your name and gotra during the puja
              sankalp.
            </li>
            <li>
              Opt for additional offerings like Vastra Daan, Anna Daan, Gau
              Seva, or Deep Daan to be done in your name.
            </li>
            <li>
              Upon completion, a video of your puja and offering will be shared
              with you on your registered WhatsApp number or can be found in
              your booking history within 3-4 days.
            </li>
            <li>
              Sacred Tirth Prasad will be sent to your address within 8-10 days.
            </li>

            <button className="puja-button" onClick={() => setShowReview(true)}>
              PARTICIPATE
            </button>
          </div>
          <div className="card1">
            <h3 className="headpuja">₹1251</h3>
            <p className="headpuja">Partner Puja</p>
            <p className="headpuja">Package for 2 Person</p>
            <li>
              Pandit ji will call out your name and gotra during the puja
              sankalp.
            </li>
            <li>
              Opt for additional offerings like Vastra Daan, Anna Daan, Gau
              Seva, or Deep Daan to be done in your name.
            </li>
            <li>
              Upon completion, a video of your puja and offering will be shared
              with you on your registered WhatsApp number or can be found in
              your booking history within 3-4 days.
            </li>
            <li>
              Sacred Tirth Prasad will be sent to your address within 8-10 days.
            </li>

            <button className="puja-button" onClick={() => setShowReview(true)}>
              PARTICIPATE
            </button>
          </div>
          <div className="card1">
            <h3 className="headpuja">₹2001</h3>
            <p className="headpuja">Family+Bhog</p>
            <p className="headpuja">Package for 4 Person</p>
            <li>
              Pandit ji will call out your name and gotra during the puja
              sankalp.
            </li>
            <li>
              Opt for additional offerings like Vastra Daan, Anna Daan, Gau
              Seva, or Deep Daan to be done in your name.
            </li>
            <li>
              Upon completion, a video of your puja and offering will be shared
              with you on your registered WhatsApp number or can be found in
              your booking history within 3-4 days.
            </li>
            <li>
              Sacred Tirth Prasad will be sent to your address within 8-10 days.
            </li>

            <button className="puja-button" onClick={() => setShowReview(true)}>
              PARTICIPATE
            </button>
          </div>
          <div className="card1">
            <h3 className="headpuja">₹3001</h3>
            <p className="headpuja">Joint Family+Bhog+Flower Bhaket</p>
            <p className="headpuja">Package for 6 Person</p>
            <li>
              Pandit ji will call out your name and gotra during the puja
              sankalp.
            </li>
            <li>
              Opt for additional offerings like Vastra Daan, Anna Daan, Gau
              Seva, or Deep Daan to be done in your name.
            </li>
            <li>
              Upon completion, a video of your puja and offering will be shared
              with you on your registered WhatsApp number or can be found in
              your booking history within 3-4 days.
            </li>
            <li>
              Sacred Tirth Prasad will be sent to your address within 8-10 days.
            </li>

            <button className="puja-button" onClick={() => setShowReview(true)}>
              PARTICIPATE
            </button>
          </div>
        </div>
        <div id="completepuja" className="card">
          <h3>Complete Puja</h3>
          <p>
            The complete puja includes all necessary rituals and ceremonies
            performed by experienced priests...
          </p>
        </div>
        <div id="faqs" className="card">
          <h3>FAQs</h3>
          <p>
            <strong>Q: What is Shani Saade Saati?</strong>
          </p>
          <p>
            A: Shani Saade Saati is a period of seven and a half years during
            which the planet Shani (Saturn) is believed to influence an
            individual's life...
          </p>
          <p>
            <strong>Q: How can I participate in the puja?</strong>
          </p>
          <p>
            A: You can participate by selecting a puja package and following the
            instructions provided by Sri Mandir.
          </p>
          <p>
            <strong>Q: What should I bring for the puja?</strong>
          </p>
          <p>
            A: Specific items may vary based on the package chosen. Generally,
            offerings of Til Tel and other materials are required.
          </p>
        </div>
        {showReview && (
          <div id="review" className="form-container">
            <h3>Register for Puja</h3>
            <p>
              To participate in the puja, please fill out the form below with
              your details. We will get in touch with you on WhatsApp.
            </p>
            <form onSubmit={handleSubmit}>
              <label>
                Enter Your Whatsapp Mobile Number:
                <input
                  type="text"
                  name="phoneNumber"
                  value={formDetails.phoneNumber}
                  onChange={handleInputChange}
                  placeholder="+91 Your mobile Number"
                />
              </label>
              <p>Please enter a valid phone number.</p>
              <label>
                Enter Your Name:
                <input
                  type="text"
                  name="name"
                  value={formDetails.name}
                  onChange={handleInputChange}
                  placeholder="Your full Name"
                />
              </label>
              <Link to="/puja-review">
                <button type="submit">Next</button>
              </Link>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default PujaComponent;
