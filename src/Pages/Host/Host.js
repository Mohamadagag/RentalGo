import React from "react";
import "./Host.css";

export default function Host() {
  return (
    <div>
      <div className="account-container">
        <div className="container">
          <form>
            <>
              <div className="form-center">
                <div className="part">
                  <label>Car name :</label>
                  <input type="text" className="inputs" />
                </div>
                <div className="part">
                  <label>Model :</label>
                  <input type="text" className="inputs" />
                </div>
                <div className="part">
                  <label>Year :</label>
                  <input type="date" className="inputs" />
                </div>
                <div className="part">
                  <label>Description :</label>
                  <input type="text" className="inputs" />
                </div>
                <div className="part">
                  <label>License plate :</label>
                  <input type="text" className="inputs" />
                </div>
                <div className="part">
                  <label>Price :</label>
                  <input type="number" className="inputs" />
                </div>
                <div className="part">
                  <label>Pickup location :</label>
                  <input type="text" className="inputs" />
                </div>
                <button type="submit" className="save">
                  Save
                </button>
              </div>
            </>
          </form>
        </div>
      </div>
    </div>
  );
}
