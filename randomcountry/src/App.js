import React, { Component } from 'react';
import axios from 'axios';
import CssBaseline from '@material-ui/core/CssBaseline';

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
      let map = new window.google.maps.Map(document.getElementById('map'), {
        center: {lat: this.state.countries[this.state.randomCountryIndex].latlng[0], lng: this.state.countries[this.state.randomCountryIndex].latlng[1]},
        zoom: 7,
      });
      var geocoder = new window.google.maps.Geocoder();
      geocoder.geocode( { 'address': this.state.countries[this.state.randomCountryIndex].name}, function(results, status) {
        if (status == window.google.maps.GeocoderStatus.OK) {
          map.setCenter(results[0].geometry.location);
          map.fitBounds(results[0].geometry.viewport);
        }
      });
    })
    .catch((err) => console.log(err))
  }

  render() {
    let countryInfo = null;

    if (this.state.countries) {
      let condensedApi = this.state.countries;
      let randomIndex = this.state.randomCountryIndex;
      countryInfo = (
        <div>
          {condensedApi[randomIndex].name}
          <img src={condensedApi[randomIndex].flag}/>
      </div>
      )
    }


    return (
      <CssBaseline>
        {countryInfo}
        <div id="map" style={{height: '600px'}}/>
      </CssBaseline>
    );
  }
}

export default App;
