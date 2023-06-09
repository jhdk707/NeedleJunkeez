import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Profile from "./pages/Profile";
import Navigation from "./components/Navigation";
import Friends from "./pages/Friends";
import Mycollection from "./pages/Mycollection";
import Signup from "./components/Signup";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Donations from "./pages/Donations";
import Footer from "./components/Footer";
import { ThemeProvider } from "@emotion/react";
import Theme from "./Theme";
import SpotResults from "./pages/SpotResults";
import DiscResults from "./pages/DiscResults";
import Splash from "./pages/Splash";

function App() {
  return (
    <div className="">
      <HashRouter>
        <ThemeProvider theme={Theme}>
          <div
            style={{
              backgroundColor: Theme.palette.background.default,
              minHeight: "100vh", // Ensure the container covers the full viewport height
            }}
          >
            <Navigation />

            <Routes>
              <Route path="*" element={<Splash />} />
              {/* <Route path="/" element={<Splash />} /> ORIGINAL CODE, CHANGED TO "*" TO TRY TO SOLVE SOME ERRORS */}
              <Route path="/home" element={<Home />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/mycollection" element={<Mycollection />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/friends" element={<Friends />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/donations" element={<Donations />} />
              <Route path="/search/spot" element={<SpotResults />} />
              <Route path="/search/disc" element={<DiscResults />} />
            </Routes>
            <Footer />
          </div>
        </ThemeProvider>
      </HashRouter>
    </div>
  );
}

export default App;
