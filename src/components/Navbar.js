import React, { Fragment } from 'react';
import AppBar from '@material-ui/core/AppBar';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    logo: {
        margin: 'auto',
        textAlign: 'center',
        maxWidth: '50%',
        maxHeight: '70%',
        top: '50%',
        transform: 'translate(25%, -50%)',
        position: 'absolute',
    },
    rightToolbar: {
        marginLeft: 'auto',
        marginRight: 0,
    },
}));

const Navbar = (props) => {
    const classes = useStyles();
    const { title } = props;
    return (
        <Fragment>
            <div>
                <AppBar position="fixed" color="#fff" elevation={0}>
                    <Toolbar className={classes.toolbar}>
                        {/* <Button size="small">LOGO</Button> */}
                        <img className={classes.logo} src={require("../media/images/HaridhamLogo.png")} alt="LOGO"></img>
                        <div className={classes.rightToolbar}>
                            <Button size="small">ABOUT</Button>
                        </div>
                    </Toolbar>
                </AppBar>
            </div>
        </Fragment >
    );
}

export default Navbar;
