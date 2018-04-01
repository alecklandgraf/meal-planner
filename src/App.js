import React, { Component } from 'react';
import './App.css';
import { pickMeals, parseGoogleSheetResponse } from './util';
import Meals from './Meals';

/*
 * thoughts:
 *   Let the user know how they can make a google spreadsheet
 *    - "Building the meal plans from this google doc" and show the link
 *       and an input or other way for the user to add their own doc.
 *   Have a week view Sun - Sat where the user can select what days to have meals
 */

const GOOGLE_SHEET =
  'https://spreadsheets.google.com/feeds/list/10Ng_4t9xqk6LfpjCZhiL3L3q2Vb8EIdsvqad-TXRLzM/1/public/full?alt=json';

class App extends Component {
  state = {
    loading: true,
    loaded: false,
    error: false,
    data: {},
  };

  componentDidMount() {
    fetch(GOOGLE_SHEET)
      .then(
        response => response.json(),
        error => {
          this.setState({ error: true, loading: false, loaded: true });
          console.error(error);
        },
      )
      .then(data => {
        console.log(data);
        this.setState({ loading: false, loaded: true, data });
      })
      .catch(error => {
        console.error(error);
        this.setState({ error: true });
      });
  }
  render() {
    const { error, loaded, loading, data } = this.state;
    const availableMeals = loaded ? parseGoogleSheetResponse(data) : [];

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Yummy</h1>
        </header>
        {error && <div>There was an error fetching the data, check the console or refresh</div>}
        {loading && <div>Loading...</div>}
        {loaded &&
          !error && (
            <div style={{ textAlign: 'initial' }}>
              <Meals meals={availableMeals} />
              {/* <pre style={{ background: 'beige' }}>{JSON.stringify(availableMeals, null, 2)}</pre> */}
            </div>
          )}
      </div>
    );
  }
}

export default App;
