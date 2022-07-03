import React from "react";
import "./Car.css";
import Carimage from "../../Images/car.png";
import { MdOutlineStar } from "react-icons/md";

export default function Car(props) {
  return (
    <div>
      <div className="card">
        <div className="car-image">
          <img src={props.carImage} alt="car" />
        </div>
        <div className="carname">
          <div>{props.name}</div>
          <div className="rating">
            {props.rating}{" "}
            <span>
              <MdOutlineStar />
            </span>
          </div>
        </div>
        <div className="price">${props.price}/day</div>
        <div className="details">
          <button>View details</button>
        </div>
      </div>
    </div>
  );
}
