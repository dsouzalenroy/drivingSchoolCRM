import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import '../styles/calender.css'
import calenderSymbol from '../images/calenderSymbol.svg'

function Calender() {
  const [startDate, setStartDate] = useState(new Date())

  return (
    <div className="Calender">
      <img
        src={calenderSymbol}
        alt="calenderSymbol"
        className="calenderSymbol"
      />
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        className="datePickerComponent"
        dateFormat="MMMM d"
      />
    </div>
  )
}

export default Calender
