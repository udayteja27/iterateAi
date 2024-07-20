import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Puja from "./pages/Puja";
import PujaBookings from "./components/PujaBookings";
import PujaComponent from "./pages/pujafulldetails";
import PujaReview from "./pages/PujsReview";
import PujaDetailFormLast from "./pages/PujaDetailFormLast";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/puja" element={<Puja />} />
          <Route path="/profile/bookings" element={<PujaBookings />} />
          <Route path="/puja-full-details" element={<PujaComponent />} />
          <Route path="/puja-review" element={<PujaReview />} />
          <Route
            path="/Puja-Detail-Form-Last"
            element={<PujaDetailFormLast />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
