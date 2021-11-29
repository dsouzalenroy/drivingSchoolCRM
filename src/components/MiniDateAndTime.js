import React from "react";
import MiniCalender from "../components/MiniCalender";
import MiniSingleTimeDropDown from "../components/MiniSingleTimeDropDown";

function MiniDateAndTime() {
  return (
    <div className="miniCalender">
      <MiniCalender />
      <MiniSingleTimeDropDown />
    </div>
  );
}

export default MiniDateAndTime;
