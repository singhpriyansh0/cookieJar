import React from 'react';
import useStyles from './styles';
import { Typography , Box,Paper,Container} from '@material-ui/core';

import menuimg from '../../images/landing_img4.jpg' 

const AboutUs =()=> {
    const classes = useStyles();
  return (
    <>
    <Container maxwidth='sm'>
    <Typography align= 'center' className={classes.About} >About_us</Typography>
    <Typography  className={classes.text}>Welcome to Cookie Jar Bakeshop! We are a small, family-owned business that specializes in delicious, homemade cookies. Our bakery is located in the heart of downtown, and we pride ourselves on using only the freshest, highest-quality ingredients in our baking.

Our menu features a wide variety of cookie flavors, from classic chocolate chip and snickerdoodle to more unique options like lavender honey and matcha green tea. We also offer a selection of brownies, cakes, and other baked goods, as well as specialty gift boxes and custom orders for special occasions.

At Cookie Jar Bakeshop, we believe that baking is an art, and we take great care to ensure that each and every cookie we make is absolutely perfect. We hope you'll stop by and try some of our treats – we're confident you'll love them as much as we do!</Typography>
</Container>
    </>

  );
}

export default AboutUs ;