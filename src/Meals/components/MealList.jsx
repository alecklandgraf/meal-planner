import React from 'react';
import sampleSize from 'lodash/sampleSize';
import './MealList.css';

const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

function MealList({ meals = {} }) {
  const mealNames = sampleSize(Object.keys(meals), 5);

  return (
    <div>
      {DAYS.map((day, i) => (
        <div key={day} className="row">
          <div className="day">{day}</div>
          <div className="meal-name">{mealNames[i]}</div>
        </div>
      ))}
    </div>
  );
}

export default MealList;
