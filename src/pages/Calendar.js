// src/Calendar.js

import React from 'react';

const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

const mapDaysToWeekdays = (days) => {
  const result = [];
  days.forEach((day, index) => {
    if (day >= 1 && day <= 5) {
      result.push(weekdays[(index * 2) % 5]);
    }
  });
  return result;
};

const Calendar = ({ selectedDays }) => {
  const weekdaysToDisplay = mapDaysToWeekdays(selectedDays);

  return (
    <div>
      <h2>Selected Days in Calendar Form</h2>
      <ul>
        {weekdaysToDisplay.map((weekday, index) => (
          <li key={index}>{weekday}</li>
        ))}
      </ul>
    </div>
  );
};

export default Calendar;
