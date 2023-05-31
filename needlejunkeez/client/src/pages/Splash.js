import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Hello from "../assets/welcomejunkeezlogo.png";
import "../App.css";
import Signup from "../components/Signup";
import Login from "../components/Login";

function Splash() {
  const [showLoginModal, setShowLoginModal] = useState(true);
  const [showSignupModal, setShowSignupModal] = useState(false);

  const handleLoginModalClose = () => {
    setShowLoginModal(false);
  };

  const handleShowSignupModal = () => {
    setShowLoginModal(false);
    setShowSignupModal(true);
  };

  const handleSignupModalClose = () => {
    setShowSignupModal(false);
  };
  return (
    <div>
      <img src={Hello} alt="Welcome" id="welcome" />
      <p id="welcomeHello">
        What it do! Welcome to NEEDLEZ ya JUNKEE! Let's talk recordz and see
        what ya got pumpin' into those speakerz today. This is a place for you
        to indulge in those sweet soundz to your earbudz and your best budz! For
        you and other JUNKEEZ to devulge! You can make new friendz, find new
        recordz, and hopefully find new trackz. Even see who has the dopest tech
        to consume that goodness. Join us below and get those juices flowing.
      </p>
      <div>
        <Routes>
          <Route
            path="/"
            element={
              showLoginModal ? (
                <Login
                  onClose={handleLoginModalClose}
                  onShowSignup={handleShowSignupModal}
                />
              ) : null
            }
          />
        </Routes>
        {showSignupModal ? <Signup onClose={handleSignupModalClose} /> : null}
      </div>
    </div>
  );
}

export default Splash;
