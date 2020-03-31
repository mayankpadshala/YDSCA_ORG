import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';

import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { deepOrange } from "@material-ui/core/colors";

import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        padding: 16,
        backgroundColor: "#fff7ea"
    }, title: {
        marginBottom: 8,
    },
    square: {
        padding: 4,
        margin: "auto",
        color: theme.palette.getContrastText("#fff7ea"),
        backgroundColor: "#fff7ea"
    },
    avatar: {
        margin: 4,
        padding: 4,
        backgroundColor: deepOrange[500]
    },
    text: {
        margin: 0,
        color: "#fff7ea"
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
        marginLeft: 36,
        textAlign: "left"
    },
    content: {
        flex: '1 0 auto',
        padding: 0,
    },
}));

const SingleEvent = (props) => {

    const classes = useStyles();
    const { mainBanner } = props;

    return (

        <Card className={classes.root} elevation={0}>
            <Box p={0.5} className={classes.avatar}>
                <Avatar variant="square" className={classes.square}>
                    <Typography color="inherit" gutterBottom>
                        MAR
                    </Typography>
                </Avatar>
                <Typography className={classes.text}>
                    <b>3</b>
                </Typography>
            </Box>

            <div className={classes.details}>
                <CardContent className={classes.content}>
                    <Typography variant="h6">
                        <b>Sunday Sabha – April 05, 2020</b>
                    </Typography>
                    <Typography variant="paragraph">
                        April 5 @ 10:30 am - 12:30 pm
                    </Typography>
                </CardContent>
            </div>
        </Card>
    );
}


SingleEvent.propTypes = {
    mainBanner: PropTypes.object,
};

export default SingleEvent;
