import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import MainBanner from './MainBanner';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    flexWrap: 'wrap',
    backgroundColor: '#fff',
    marginTop: 48,
    marginBottom: 64,
  },
  heading: {},
  paper: {
    backgroundColor: '#fff',
  },
  description: {
    marginTop: 16,
    marginBottom: 32,
  },
  mainFeaturedPostContent: {
    position: 'relative',
    marginRight: 0,
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(4),
    },
  },
  backgroundCream: {
    backgroundColor: '#fff7ea',
  },
}));

const SubhVichar = (props) => {
  const classes = useStyles();
  const { mainBanner } = props;

  return (
    <Grid container elevation={0} className={classes.root}>
      <Grid item sm={12} xs={12} elevation={0} className={classes.text}>
        <Paper className={classes.paper} elevation={0}>
          <div className={classes.mainFeaturedPostContent}>
            <Typography
              className={classes.heading}
              component='h1'
              variant='h4'
              color='inherit'
              gutterBottom
            >
              Why do I need “A Saint” in my life.
            </Typography>
            <Divider variant='middle' />
            <Grid item xs={12} elevation={0} className={classes.description}>
              <Divider orientation='vertical' flexItem />
              <Typography variant='h6' color='inherit' paragraph align='center'>
                A saint is true friend of soul. The selfless love from the saint
                is capable to uplift our soul and channelize the potential
                within us.
              </Typography>
            </Grid>
          </div>
        </Paper>
      </Grid>
    </Grid>
  );
};

SubhVichar.propTypes = {
  mainBanner: PropTypes.object,
};

export default SubhVichar;
