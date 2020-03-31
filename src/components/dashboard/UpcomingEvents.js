import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import SingleEvent from './SingleEvent'

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: "#fff7ea"

    }, title: {
        marginTop: 36,
        marginBottom: 36,
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
        backgroundColor: "#fff7ea"
    }
}));

const UpcomingEvents = (props) => {

    const classes = useStyles();
    const { mainBanner } = props;

    return (

        <Grid container elevation={0} className={classes.root}>
            <Grid item xs={12} elevation={0} className={classes.title}>
                <Typography component="h3" variant="h5" color="inherit" gutterBottom>
                    Upcoming Events
                </Typography>
            </Grid>
            <Grid item xs={12} elevation={0}>
                <SingleEvent />
            </Grid>
            <Grid item xs={12} elevation={0}>
                <SingleEvent />
            </Grid>
        </Grid >
    );
}


UpcomingEvents.propTypes = {
    mainBanner: PropTypes.object,
};

export default UpcomingEvents;
