import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  card: {
    width: '100%',
    maxWidth: '600px'
  },
  media: {
    paddingTop: '56.25%', // 16:9
  },
  map: {
    height: '400px',
  }
});

const CountryCard = (props) => {
  const { classes } = props;
  return(
    <Card className={classes.card}>
      <CardHeader title={props.country}/>
      <CardMedia
      className={classes.media}
      image={props.image}
      src={`The flag of ${props.country}`}
      />
    <div id="map" className={classes.map}/>
    </Card>
  )
}

export default withStyles(styles) (CountryCard);
