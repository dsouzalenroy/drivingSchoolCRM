import React from "react";
import location from "../images/location.svg";
import "../styles/SuburbDropdown.css";

function SuburbDropdown() {
  return (
    <div className="SuburbDropdown">
      <img src={location} alt="location" />
      <select className="locationDropdownOptions">
        <option value="loganCity">Logan City</option>
        <option value="sunshineCoast">Sunshine Coast</option>
        <option defaultValue value="Brisbane">
          Brisbane
        </option>
        <option value="Gold Coast">Gold Coast</option>
      </select>
    </div>
  );
}

export default SuburbDropdown;
