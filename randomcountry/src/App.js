import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  state = {
    randomCountryIndex: 0

  }
  generateRandomNumber = (limit) => Math.floor(Math.random() * Math.floor(limit));

  componentDidMount(){
    axios.get('https://restcountries.eu/rest/v2/all')
    .then((res) => {
      this.setState({
        countries: res.data,
        randomCountryIndex: this.generateRandomNumber(res.data.length)
      });
    })
    .catch((err) => console.log(err))
  }

  render() {
    let countryInfo = null;

    if (this.state.countries) {
      let condensedApi = this.state.countries;
      countryInfo = (
        <div>
          {condensedApi[this.state.randomCountryIndex].name}
          <img src={condensedApi[this.state.randomCountryIndex].flag}/>
      </div>
      )
    }

    return (
      <div className="App">
        {countryInfo}
      </div>
    );
  }
}

export default App;
