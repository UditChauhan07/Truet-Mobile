import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import "./styles.modules.css";
import users from "../../Json/user.json"

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();




  // Handle Login
  const handleLogin = (e) => {
    e.preventDefault();

    // Check if entered email and password match any user in JSON
    const user = users.find(
      (user) => user.email === email && user.password === password
    );

    if (user) {
      navigate("/home"); // Redirect to home page
    } else {
      setError("Invalid email or password"); // Show error message
    }
  };


  return (
    <div className="container">
      <div className="card">
        <div className="text-center">
          <div className="Bg-image">
            <img
              src="/truet-logo-white.png"
              alt="Truet Logo"
              className="logo"
            />
          </div>
        </div>
        <div className="maineInner">
          <h2 className="title">Sign In</h2>
          <p className="subtitle">Enter your email and password to sign in!</p>

          <button className="google-btn">
            <img src="svg/Google-Logo.svg"/>
            <a href="https://accounts.google.com/signin">Sign in with Google</a>
          </button>
          <div className="divider">or</div>
          <form onSubmit={handleLogin}>
        <div className="input-group">
          <label>Email*</label>
          <input
            type="email"
            placeholder="mail@truet.net"
            className="input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="input-group2 relative">
          <label>Password*</label>
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Min. 8 characters"
            className="input2"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="button"
            className="eye-btn"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <IoEyeOutline size={20} /> : <IoEyeOffOutline size={20} />}
          </button>
        </div>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <div className="options">
          <label className="remember">
            <input type="checkbox" /> Keep me logged in
          </label>
          <a className="forgot">Forgot password?</a>
        </div>
        <button className="signin-btn" type="submit">
          Sign In
        </button>
      </form>
          <p className="footer-text">
            Not registered yet? <a href="#" className="link">Create an Account</a>
          
            
          </p>
          <p className="copyright">
            &copy; 2025 Truet. All Rights Reserved for the usage of terms
            related to Truet & Truet AI
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
