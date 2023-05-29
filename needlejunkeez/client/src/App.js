// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React, { useState } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
// import Profile from './components/Profile'
// import Navigation from "./components/Navigation";
// import Donations from "./components/footer/Donations";
// import Friends from "./components/Friends";
// import Quickadd from "./components/Quickadd";
// import Mycollection from "./components/Mycollection";
import Signup from "./components/Signup";
import Login from "./components/Login";
// import Home from "./components/home/Home";
// import Contact from './components/footer/Contact'
// import Footer from './components/footer/Footer'
import { ThemeProvider } from "@emotion/react";
import Theme from "./Theme";
// // import Home from "./components/Home";
// import SpotResults from "./components/SpotResults";
// import DiscResults from "./components/DiscResults";
import Splash from "./pages/Splash";

function App() {
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
    <div className="">
      <HashRouter>
        <ThemeProvider theme={Theme}>
          <div
            style={{
              backgroundColor: Theme.palette.background.default,
              minHeight: "100vh", // Ensure the container covers the full viewport height
            }}
          >
            {/* <Navigation /> */}

            <Routes>
              <Route path="/" element={<Splash />} />
              {/* <Route path="/home" element={<Home />} /> */}
              <Route path="/signup" element={<Signup />} />
              {/* <Route path="/mycollection" element={<Mycollection />} /> */}
              {/* <Route path="/profile" element={<Profile />} /> */}
              {/* <Route path="/contact" element={<Contact />} /> */}
              {/* <Route path="/quickadd" element={<Quickadd />} /> */}
              {/* <Route path="/friends" element={<Friends />} /> */}
              {/* <Route path="/donations" element={<Donations />} /> */}
              {/* <Route path="/search/spot" element={<SpotResults />} /> */}
              {/* <Route path="/search/disc" element={<DiscResults />} /> */}
            </Routes>
            {/* <Splash /> */}
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
            {showSignupModal ? (
              <Signup onClose={handleSignupModalClose} />
            ) : null}
            {/* <Footer /> */}
          </div>
        </ThemeProvider>
      </HashRouter>
    </div>
  );
}

export default App;
