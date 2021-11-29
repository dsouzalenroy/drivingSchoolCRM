import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import '../styles/MiniCalender.css'
import calenderSymbol from '../images/calenderSymbol.svg'

function MiniCalender() {
  const [startDate, setStartDate] = useState(new Date())

  return (
    <div className="miniCalender">
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

export default MiniCalender
