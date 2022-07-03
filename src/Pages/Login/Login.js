import React, { useState } from "react";
import "./Login.css";
import LoginImage from "../../Images/LoginImage.svg";
import { TbUserCircle } from "react-icons/tb";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {};
  const handleChange = () => {};
  return (
    <>
      <div className="login-container">
        <div className="fill">
          <div className="login-img">
            <img src={LoginImage} alt="Login" />
          </div>
          <div className="user-icon">
            <span>
              <TbUserCircle className="icon" />
            </span>
          </div>
          <div className="login-info">
            <h2>Enter your credentials to host your car</h2>
            <form className="login-form" onSubmit={handleSubmit}>
              <div>
                <label>Email</label>
                <input
                  required
                  type="text"
                  className="login-input"
                  placeholder="example@gmail.com"
                  name="email"
                  value={email}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label>Password</label>
                <input
                  required
                  type="password"
                  className="login-input"
                  placeholder="your password"
                  name="password"
                  value={password}
                  onChange={handleChange}
                />
              </div>
              <div className="center-button">
                <button type="submit" className="login-button">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
