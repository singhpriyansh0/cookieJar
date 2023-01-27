import React from "react";
import landing_img from '../../images/landing_img3.jpg';
import {Box, Typography} from '@material-ui/core';
import useStyles from './styles';
import { ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme();
theme = responsiveFontSizes(theme);


const LandingPage =()=>{
    const classes = useStyles();
    return ( <>
    <Box>
    <img className={classes.landingImage} src={landing_img} alt="landing_image" />
    <ThemeProvider theme={theme}>
    <Typography align='center' className={classes.text}>Cookie-jar </Typography>   
    <Typography align='center'  className={classes.text2}>Freshly Baked Goods Daily at Cookie-jar</Typography>
    </ThemeProvider>
       </Box>
    </>);
};

export default LandingPage ;
