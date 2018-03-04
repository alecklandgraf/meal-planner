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
          <div>
            <span className="day-icon">{day}</span>{' '}
            <span className="meal-name">{mealNames[i]}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MealList;
