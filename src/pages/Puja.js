import React from "react";
import "./Puja.css";
import { Link } from "react-router-dom";

const pujaData = [
  {
    title: "Shani Saade Saati Peeda Shanti Mahapuja and Til Tel Abhishek",
    subtitle: "For Prevention of Misfortunes and Adversities",
    location: "Shree Shanidev Temple, Shani Shingnapur, Maharashtra",
    date: "20 July, Saturday, Ashadha Shukla Chaturdashi",
    buttonText: "PARTICIPATE",
    image:
      "https://res.cloudinary.com/dyutmmnia/image/upload/v1721371287/utzvqzeu9uqkhusaxnwe.png",
  },
  {
    title: "Maa Bagalamukhi Tantra Yukta Havan",
    subtitle: "for Victory in Court Cases and Victory over Enemies",
    location: "Maa Bagalamukhi Temple, Haridwar, Uttarakhand",
    date: "21 July, Sunday, Ashadha Shukla Chaturdashi",
    buttonText: "PARTICIPATE",
    image:
      "https://res.cloudinary.com/dyutmmnia/image/upload/v1721441439/t1tm35glybd3jhehlrvf.png",
  },
  {
    title: "Divya Mahakali Tantrokta Havan",
    subtitle: "For Courage and Protection from Obstacles",
    location: "Shaktipeeth Maa Tarapith Temple, Birbhum, West Bengal",
    date:
      "20 July, Saturday, Ashadha Shukla Purnima (From 05:59 PM, July 20 to 03:46 PM, July 21)",
    buttonText: "PARTICIPATE",
    image:
      "https://res.cloudinary.com/dyutmmnia/image/upload/v1721441448/rejv6rxpcsxxaevwikdy.png",
  },
];

const PujaCard = ({ title, subtitle, location, date, buttonText, image }) => {
  return (
    <div className="puja-card">
      <img src={image} alt={title} className="puja-card-image" />
      <h3>{title}</h3>
      <p>{subtitle}</p>
      <p>
        <strong>📍 {location}</strong>
      </p>
      <p>📅 {date}</p>
      <Link to={`/puja-full-details`}>
        <button>{buttonText}</button>
      </Link>
    </div>
  );
};

const PujaCards = () => {
  return (
    <div className="container">
      <h1 className="head">
        Perform your Puja as per Vedic rituals at Famous Hindu Temples in India
        with Sri Mandir
      </h1>
      <div className="second">
        <h1>Upcoming Pujas on Sri Mandir.</h1>
        <h3>
          Book online puja with Sri Mandir in more than 500+ temples across
          India. Receive video of the puja along with the Prasad and
          <br />
          receive blessings from the divine for prosperity and well-being of you
          and your family
        </h3>
      </div>
      <div className="puja-cards-container">
        {pujaData.map((puja, index) => (
          <PujaCard
            key={index}
            title={puja.title}
            subtitle={puja.subtitle}
            location={puja.location}
            date={puja.date}
            buttonText={puja.buttonText}
            image={puja.image}
          />
        ))}
      </div>
    </div>
  );
};

export default PujaCards;
