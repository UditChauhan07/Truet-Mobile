import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import "./styles.modules.css";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
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
            <FaGoogle className="icon" /> Sign in with Google
          </button>
          <div className="divider">or</div>
          <form>
            <div className="input-group">
              <label>Email*</label>
              <input
                type="email"
                placeholder="mail@truet.net"
                className="input"
              />
            </div>
            <div className="input-group relative">
              <label>Password*</label>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Min. 8 characters"
                className="input"
              />
              <button
                type="button"
                className="eye-btn"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <IoEyeOutline size={20} />
                ) : (
                  <IoEyeOffOutline size={20} />
                )}
              </button>
            </div>
            <div className="options">
              <label className="remember">
                <input type="checkbox" /> Keep me logged in
              </label>
              <a className="forgot">Forgot password?</a>
            </div>            
            <button
              className="signin-btn"
              onClick={() => navigate("/dashboard")}
            >
              Sign In
            </button>
          </form>
          <p className="footer-text">
            Not registered yet? 
            <a href="#" className="link">
               Create an Account
            </a>
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
