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
    return (
      <div className="App">
        {this.state.countries ? this.state.countries[this.state.randomCountryIndex].name : 'Country'}
      </div>
    );
  }
}

export default App;
