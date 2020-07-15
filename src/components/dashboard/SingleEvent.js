import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { deepOrange } from '@material-ui/core/colors';

import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    padding: 16,
    marginTop: 4,
    marginBottom: 4,
    backgroundColor: '#fff',
  },
  title: {
    marginTop: 8,
  },
  square: {
    padding: 4,
    margin: 'auto',
    color: theme.palette.getContrastText('#fff7ea'),
    backgroundColor: '#fff7ea',
  },
  avatar: {
    margin: 4,
    padding: 4,
    backgroundColor: deepOrange[500],
  },
  text: {
    margin: 0,
    color: '#fff7ea',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: 36,
    textAlign: 'left',
    padding: 0,
  },
  content: {
    flex: '1 0 auto',
    padding: 0,
    '&:last-child': {
      paddingBottom: 0,
    },
  },
  date: {
    marginTop: 8,
  },
}));

const SingleEvent = (props) => {
  const classes = useStyles();

  return (
    <Card className={classes.root} elevation={0}>
      <Box p={0.5} className={classes.avatar}>
        <Avatar variant='square' className={classes.square}>
          <Typography color='inherit' gutterBottom className={classes.date}>
            3 MAR
          </Typography>
        </Avatar>
        <Typography className={classes.text}>
          <b>2020</b>
        </Typography>
      </Box>

      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography variant='h6' className={classes.title}>
            <b>Sunday Sabha</b>
          </Typography>
          <Typography variant='paragraph'>10:30 am - 12:30 pm</Typography>
        </CardContent>
      </div>
    </Card>
  );
};

SingleEvent.propTypes = {
  mainBanner: PropTypes.object,
};

export default SingleEvent;
