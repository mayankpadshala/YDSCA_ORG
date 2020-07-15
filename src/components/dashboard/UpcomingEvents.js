import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import SingleEvent from './SingleEvent';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#fff',
  },
  title: {
    marginTop: 0,
    marginBottom: 8,
  },
  mainFeaturedPostContent: {
    position: 'relative',
    padding: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6),
      paddingRight: 0,
    },
  },
  backgroundCream: {
    backgroundColor: '#fff',
  },
  button: {
    '&:hover': {
      backgroundColor: '#ff8B4B',
    },
  },
}));

const UpcomingEvents = (props) => {
  const classes = useStyles();
  const { mainBanner } = props;

  return (
    <Grid container elevation={0} className={classes.root}>
      <Grid item sm={12} xs={12} elevation={0} className={classes.title}>
        <Typography component='h3' variant='h4' color='inherit' gutterBottom>
          Upcoming Events
        </Typography>
      </Grid>
      <Grid item sm={12} xs={12} elevation={0}>
        <Button className={classes.button}>
          <SingleEvent />
        </Button>
      </Grid>
      <Grid item sm={12} xs={12} elevation={0}>
        <Button className={classes.button}>
          <SingleEvent />
        </Button>
      </Grid>
      <Grid item sm={12} xs={12} elevation={0}>
        <Button className={classes.button}>
          <SingleEvent />
        </Button>
      </Grid>
    </Grid>
  );
};

UpcomingEvents.propTypes = {
  mainBanner: PropTypes.object,
};

export default UpcomingEvents;
