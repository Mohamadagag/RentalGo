import React from "react";
import "./Home.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Car from "../../Images/image 1.png";
import Carlist from "../../Components/Carlist/Carlist";

export default function Home() {
  return (
    <>
      <div className="home-conatianer">
        <div className="intro">
          <div className="left">
            <div>
              <h1>Invite our cars to your life</h1>
            </div>
            <div>
              <span>1000+</span>
              <p>cars</p>
              <span>100+</span>
              <p>locations</p>
            </div>
          </div>
          <div className="right">
            <img src={Car} alt="Car" />
          </div>
        </div>
        <div className="searchbar">
          <input type="text" className="search-input"/>
          <button>Search</button>
        </div>
      </div>
      <Carlist />
    </>
  );
}
