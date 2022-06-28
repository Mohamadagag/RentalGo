import React from "react";
import "./Login.css";
import LoginImage from "../../Images/LoginImage.svg";
import { TbUserCircle } from "react-icons/tb";

export default function Login() {
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
            <form className="login-form">
              <div>
                <label>Email</label>
                <input
                  type="text"
                  className="login-input"
                  placeholder="example@gmail.com"
                />
              </div>
              <div>
                <label>Password</label>
                <input
                  type="password"
                  className="login-input"
                  placeholder="your password"
                />
              </div>
              <div className="center-button">
                <button className="login-button">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
