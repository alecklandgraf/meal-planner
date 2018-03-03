import React from "react";

function MealList({ meals = {} }) {
  const mealNames = Object.keys(meals);

  return (
    <ul>{mealNames.map(mealName => <li key={mealName}>{mealName}</li>)}</ul>
  );
}

export default MealList;
