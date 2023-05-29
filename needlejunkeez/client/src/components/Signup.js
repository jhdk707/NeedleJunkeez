import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../App.css";

const Signup = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/api/signup", {
        username,
        email,
        password,
      });
      setMessage(response.data.message);
      setUsername("");
      setEmail("");
      setPassword("");
    } catch (error) {
      console.error("Error signing up:", error);
      setMessage("Failed to sign up");
    }
  };

  return (
    <div id="signupStyle">
      <h1>Sign Up</h1>
      <form onSubmit={handleSignup}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Sign Up</button>
      </form>
      <p>{message}</p>
      <button
        type="button"
        className="btn btn-link"
        onClick={() => navigate("/")}
      >
        Already have an account? Log in here.
      </button>
    </div>
  );
};

export default Signup;
