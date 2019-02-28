import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  state = {
    countries: []
  }

  componentDidMount(){
    axios.get('https://restcountries.eu/rest/v2/all')
    .then((res) => {this.setState({countries: res.data})})
    .catch((err) => console.log(err))
  }

  render() {
    return (
      <div className="App">
        Hello World
      </div>
    );
  }
}

export default App;
