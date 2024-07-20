import React from "react";

import "./Home.css"; // Create this CSS file for styling

function Home() {
  return (
    <div className="home">
      <main className="main-content">
        <div className="rowbar">
          <h1>
            Pray daily with <span className="highlight">Sri Mandir</span>
            <br />
            One App for all your
            <br />
            devotional needs.
          </h1>
          <div className="app-buttons">
            <a href="https://apps.apple.com/" target="blank">
              <img
                src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83&amp;releaseDate=1276560000&h=7e7b68fad19738b5649a1bfb78ff46e9"
                alt="Download on the App Store"
                className="image1"
              />
            </a>
            <a href="https://play.google.com/" target="blank">
              <img
                alt="Get it on Google Play"
                src="https://play.google.com/intl/en_us/badges/images/generic/en_badge_web_generic.png"
                className="image1"
              />
            </a>
          </div>
        </div>
        <img
          src="https://res.cloudinary.com/dyutmmnia/image/upload/v1721362291/n7cbuw5rtjkdqmayuycn.png"
          alt="App Mockup"
          className="app-mockup"
        />
      </main>
    </div>
  );
}

export default Home;
