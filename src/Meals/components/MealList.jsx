import React from 'react';
import sampleSize from 'lodash/sampleSize';
import './MealList.css';

const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

class BlueApronLink extends React.Component {
  handleOnClick = () => {
    const { recipeID } = this.props;
    const url = `https://www.blueapron.com/recipes/${recipeID}`;

    window.open(url, '_blank');
  };

  render() {
    const { mealName } = this.props;

    return (
      <div className="meal-name" onClick={this.handleOnClick}>
        {mealName}
      </div>
    );
  }
}

class GoogleRecipeLink extends React.Component {
  handleOnClick = () => {
    const { mealName } = this.props;
    const searchQuery = ['recipe', ...mealName.split(' ')].join('+');
    const url = `https://www.google.com/search?q=${searchQuery}`;

    window.open(url, '_blank');
  };

  render() {
    const { mealName } = this.props;

    return (
      <div className="meal-name" onClick={this.handleOnClick}>
        {mealName}
      </div>
    );
  }
}

function MealList({ meals = {} }) {
  const mealNames = sampleSize(Object.keys(meals), 5);
  // do something gsx$blueapronrecipe

  return (
    <div>
      {DAYS.map((day, i) => (
        <div key={day} className="row">
          <div className="day">{day}</div>
          {meals[mealNames[i]]['gsx$blueapronrecipe']['$t'] ? (
            <BlueApronLink
              mealName={mealNames[i]}
              recipeID={meals[mealNames[i]]['gsx$blueapronrecipe']['$t']}
            />
          ) : (
            <GoogleRecipeLink mealName={mealNames[i]} />
          )}
        </div>
      ))}
    </div>
  );
}

export default MealList;
