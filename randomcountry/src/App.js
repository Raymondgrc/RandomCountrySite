import React, { Component } from 'react';
import axios from 'axios';
import CssBaseline from '@material-ui/core/CssBaseline';

class App extends Component {
  state = {}
  generateRandomNumber = (limit) => Math.floor(Math.random() * Math.floor(limit));
  createMap = () => {
    let map = new window.google.maps.Map(document.getElementById('map'), {
      center: {lat: this.state.countries[this.state.randomCountryIndex].latlng[0], lng: this.state.countries[this.state.randomCountryIndex].latlng[1]},
      zoom: 7,
    });
  }
  componentDidMount(){
    axios.get('https://restcountries.eu/rest/v2/all')
    .then((res) => {
      this.setState({
        countries: res.data,
        randomCountryIndex: this.generateRandomNumber(res.data.length)
      }, this.createMap);
    })
    .catch((err) => console.log(err))
  }

  render() {
    let countryCard = null;
    if (this.state.countries) {
      let {countries, randomCountryIndex} = this.state;
      countryCard = (
        <div>
          {countries[randomCountryIndex].name}
          <img src={countries[randomCountryIndex].flag}/>
        </div>
      )
    }


    return (
      <CssBaseline>
        {countryCard}
        <div id="map" style={{height: '600px'}}/>
      </CssBaseline>
    );
  }
}

export default App;
