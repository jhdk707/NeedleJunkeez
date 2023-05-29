import React from "react";
import Hello from "../assets/welcome-photo.png";
import "../App.css";

function Splash() {
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
    </div>
  );
}

export default Splash;
