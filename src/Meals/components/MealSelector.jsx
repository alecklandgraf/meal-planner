import React from 'react';

class MealSelector extends React.Component {
  state = {
    numberOfMeals: 5,
  };

  handleChange = event => {
    this.setState({ numberOfMeals: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
  };

  render() {
    const { numberOfMeals } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Number of meals:
          <input type="number" value={numberOfMeals} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default MealSelector;
