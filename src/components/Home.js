import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import MainBanner from './dashboard/MainBanner'
import SubhVichar from './dashboard/SubhVichar'
import Articles from './dashboard/Articles'
import Footer from './dashboard/Footer'
import UpcomingEvents from './dashboard/UpcomingEvents'

const useStyles = makeStyles((theme) => ({
    mainGrid: {
        marginTop: "36px",
    },
    root: {
        backgroundColor: "#fff7ea",
        height: "100%",
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        height: "100%",
        color: theme.palette.text.secondary,
    }
}));

const mainBannerProps = {
    image: 'https://source.unsplash.com/random',
};

const featuredPosts = [
    {
        title: 'Featured post',
        date: 'Nov 12',
        description:
            'This is a wider card with supporting text below as a natural lead-in to additional content.',
        image: 'https://source.unsplash.com/random',
        imageText: 'Image Text',
    },
    {
        title: 'Post title',
        date: 'Nov 11',
        description:
            'This is a wider card with supporting text below as a natural lead-in to additional content.',
        image: 'https://source.unsplash.com/random',
        imageText: 'Image Text',
    },
];

const Home = (props) => {

    const classes = useStyles();

    return (
        <Fragment>
            <Paper className={classes.mainGrid}>
                <CssBaseline />
                <Grid container spacing={0} elevation={0}>
                    <Grid item xs={12} elevation={0} className={classes.mainGrid}>
                        <Paper className={classes.paper} elevation={0}>
                            <MainBanner mainBanner={mainBannerProps} />
                        </Paper>
                    </Grid>
                    <Grid item xs={12} elevation={0}>
                        <Paper className={classes.paper} elevation={0}>
                            <SubhVichar mainBanner={mainBannerProps} />
                        </Paper>
                    </Grid>
                    <Grid item xs={8}>
                        <Paper className={classes.paper} elevation={0}>
                            <Articles atrticles={mainBannerProps} />
                        </Paper>
                    </Grid>
                    <Grid item xs={4}>
                        <Paper className={classes.paper} elevation={0}>
                            <div className={classes.root}>
                                <UpcomingEvents />
                            </div>
                        </Paper>
                    </Grid>
                </Grid>
                <Footer description={"Description"} title={"Yogi Divine Society - California"} />
            </Paper>
        </Fragment >
    );
}


Home.propTypes = {
    mainBanner: PropTypes.object,
    atrticles: PropTypes.object,
};

export default Home;
