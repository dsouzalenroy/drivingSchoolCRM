import React from 'react'
import ClockSymbol from '../images/ClockSymbol.svg'
import '../styles/SingleTimeDropDown.css'

function SingleTimeDropDown() {
  return (
    <div className="SingleTimeDropDown">
      <img src={ClockSymbol} alt="location" className="ClockSymbol" />
      <select className="singleTimeOptions">
        <option value="1" selected>
          8:00 am-8:45 am
        </option>
        <option value="2">9:00 am-9:45 am</option>
        <option value="3">10:00 am-10:45 pm</option>
        <option value="4">11:00 am-11:45 am</option>
        <option value="5">12:00 pm-12:45 pm</option>
        <option value="5">1:00 pm-1:45 pm</option>
        <option value="5">2:00 pm-2:45 pm</option>
        <option value="5">3:00 pm-3:45 pm</option>
        <option value="5">4:00 pm-4:45 pm</option>
        <option value="5">5:00 pm-5:45 pm</option>
      </select>
    </div>
  )
}

export default SingleTimeDropDown
