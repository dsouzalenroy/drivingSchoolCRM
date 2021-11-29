import React from "react";
import ClockSymbol from "../images/ClockSymbol.svg";
import "../styles/MiniSingleTimeDropDown.css";

function MiniSingleTimeDropDown() {
  return (
    <div className="MiniSingleTimeDropDown">
      <img src={ClockSymbol} alt="location" className="ClockSymbol" />
      <select className="MiniSingleTimeOptions">
        <option value="1" selected>
          8:00 am-8:45 am
        </option>
        <option value="2">9:00am-9:45am </option>
        <option value="3">10:00am-10:45pm </option>
        <option value="4">11:00am-11:45am </option>
        <option value="5">12:00pm-12:45pm </option>
        <option value="5">1:00pm-1:45pm </option>
        <option value="5">2:00pm-2:45pm </option>
        <option value="5">3:00pm-3:45pm </option>
        <option value="5">4:00pm-4:45pm </option>
        <option value="5">5:00pm-5:45pm </option>
      </select>
    </div>
  );
}

export default MiniSingleTimeDropDown;
