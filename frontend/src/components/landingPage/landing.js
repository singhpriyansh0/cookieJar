import React from "react";
import landing_img from '../../images/landing_img.jpg'
import {Box} from '@material-ui/core'
import useStyles from './styles';

const LandingPage =()=>{
    const classes = useStyles();
    return ( <>
    <Box>
       <img className={classes.landingImage} src={landing_img} alt="landing_image" height="855" ></img>
       </Box>
    </>);
};

export default LandingPage ;