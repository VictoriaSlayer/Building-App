import React, { useState } from 'react';
import Calendar from 'react-calendar';
import './MyCalendar.css';

function MyCalendar(){
    const [value, onChange] = useState(new Date());


  return (
    <div>
      <Calendar onChange={onChange} value={value} />
    </div>
  );
}

export default MyCalendar;