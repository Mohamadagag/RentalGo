import React from "react";
import "../Navbar/Navbar.css";
import RentalGo from "../../Images/RentalGo.svg";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div className="navbar-container">
        <nav>
          <div>
            <Link to="/home">
              <img src={RentalGo} alt="Logo" />
            </Link>
          </div>

          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/howitworks">How it works</Link>
            </li>
            <li>
              <Link to="/host">Host</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
