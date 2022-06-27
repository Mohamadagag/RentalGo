import React from "react";
import "./Car.css";
import Carimage from "../../Images/car.png";
import { MdOutlineStar } from "react-icons/md";

export default function Car() {
  return (
    <div>
      <div className="card">
        <div className="car-image">
          <img src={Carimage} alt="car" />
        </div>
        <div className="carname">
          <div>Range Rover</div>
          <div className="rating">
            5.0{" "}
            <span>
              <MdOutlineStar />
            </span>
          </div>
        </div>
        <div className="price">$100/day</div>
        <div className="details">
          <button>View details</button>
        </div>
      </div>
    </div>
  );
}
