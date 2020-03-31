import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles((theme) => ({
    root: {
        marginBottom: 16,
    },
    mainFeaturedPostContent: {
        position: 'relative',
        padding: theme.spacing(3),
        [theme.breakpoints.up('md')]: {
            padding: theme.spacing(2),
            paddingRight: 0,
        },
    }, media: {
    }
}));

const Articles = (props) => {

    const classes = useStyles();
    const { atrticles } = props;

    return (

        <Grid container elevation={0}>
            <Grid item xs={12} elevation={0}>
                <Typography component="h1" variant="h4" color="inherit" gutterBottom>
                    Recent Events
                </Typography>
            </Grid>
            <Grid item xs={6} elevation={0}>
                <Paper className={classes.paper} elevation={0}>
                    <div className={classes.mainFeaturedPostContent}>
                        <Typography component="h1" variant="h5" color="inherit" gutterBottom>
                            <Link href="#">
                                Holi-Dhuleti
                            </Link>
                        </Typography>
                        <Card className={classes.root} elevation={0}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    className={classes.media}
                                    alt="Contemplative Reptile"
                                    height="380"
                                    image={atrticles.image}
                                    title="Contemplative Reptile"
                                />
                            </CardActionArea>
                        </Card>
                        <Typography color="inherit">
                            Celebrated On: March 8, 2020
                        </Typography>
                    </div>
                </Paper>
            </Grid>
            <Grid item xs={6} elevation={0}>
                <Paper className={classes.paper} elevation={0}>
                    <div className={classes.mainFeaturedPostContent}>
                        <Typography component="h1" variant="h5" color="inherit" gutterBottom>
                            <Link href="#">
                                Bhagatji Maharaj’s Pragatyadin
                            </Link>
                        </Typography>
                        <Card className={classes.root} elevation={0}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    className={classes.media}
                                    alt="Contemplative Reptile"
                                    height="380"
                                    image={atrticles.image}
                                    title="Contemplative Reptile"
                                />
                            </CardActionArea>
                        </Card>
                        <Typography color="inherit">
                            Celebrated On: March 9, 2020
                        </Typography>
                    </div>
                </Paper>
            </Grid>

        </Grid >
    );
}


Articles.propTypes = {
    atrticles: PropTypes.object,
};

export default Articles;
