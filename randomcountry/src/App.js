import React, { Component } from 'react';
import axios from 'axios';
import CountryCard from './components/countryCard/CountryCard';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    backgroundColor: '#303030',
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

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
    const { classes } = this.props;
    let countryCard = null;
    if (this.state.countries) {
      let {countries, randomCountryIndex} = this.state;
      countryCard = (
          <CountryCard country={countries[randomCountryIndex].name} image={countries[randomCountryIndex].flag} />
      )
    }


    return (
        <div className={classes.root}>
          {countryCard}
        </div>
    );
  }
}

export default withStyles(styles) (App);
