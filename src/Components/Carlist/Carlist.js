import React from "react";
import "./Carlist.css";
import Car from "../Car/Car";

export default function Carlist() {
  return (
    <div className="list">
      <Car />
      <Car />
      <Car />
      <Car />
      <Car />
      <Car />
    </div>
  );
}
