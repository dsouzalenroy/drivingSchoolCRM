import React from "react";
import "../styles/testing.css";
import MiniCalender from "../components/MiniCalender";
import MiniSingleTimeDropDown from "../components/MiniSingleTimeDropDown";

function testing() {
  return (
    <div className="testing">
      <div className="miniCalenderTime">
        <div className="miniCalender">
          <MiniCalender />
        </div>
        <div className="miniSingleTimeDropDown">
          <MiniSingleTimeDropDown />
        </div>
      </div>
    </div>
  );
}

export default testing;
