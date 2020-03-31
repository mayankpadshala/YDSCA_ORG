import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: 345,
    },
}));

const MainBanner = (props) => {

    const classes = useStyles();
    const { mainBanner } = props;

    return (
        <Card className={classes.root} elevation={0}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="380"
                    image={mainBanner.image}
                    title="Contemplative Reptile"
                />
            </CardActionArea>
            {/* 
            <CardActions>
                <Button size="small" color="primary">
                    Share
                </Button>
                <Button size="small" color="primary">
                    Learn More
                </Button>
            </CardActions>
             */}
        </Card>
    );
}


MainBanner.propTypes = {
    mainBanner: PropTypes.object,
};

export default MainBanner;
