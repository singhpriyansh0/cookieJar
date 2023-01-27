import React from 'react'
import {AppBar,Typography,Toolbar,Button,Box,Drawer,IconButton} from '@material-ui/core'
import Cookie_jar_logo from '../../images/Cookie_jar_logo.png'
import useStyles from './styles';
import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu'



const Nav =() => {
    const classes = useStyles();

    const [isDrawerOpen,setIsDrawerOpen]= useState(false)
    return  (
    <>
        <AppBar className={classes.appbar} >
        <Toolbar>
            <img  className={classes.navlogoLg} src={Cookie_jar_logo} alt="Cookie_jar_logo" height="70"/>
            <img  className={classes.navlogoSm} src={Cookie_jar_logo} alt="Cookie_jar_logo" height="50"/>
           
           
            <Button color="inherit" className={classes.menu_button}>Menu</Button>
            <IconButton className={classes.Drawer_button} colour='inherit' edge='start' aria-label='logo' onClick={() => setIsDrawerOpen(true)}><MenuIcon/></IconButton>
            <Button color="inherit" className={classes.about_button}>About us</Button>
            <Button color="inherit"  className={classes.contact_button}>Contact</Button>
           
                    
        </Toolbar>
        </AppBar>
        <Drawer anchor= 'right' open={isDrawerOpen}  onClose={() =>setIsDrawerOpen(false)}>
            <Box p={10} width='250px' textAlign='center' role='presentation'> 
                <Typography>
                    sidepanel
                </Typography>
            </Box>

        </Drawer>
        </>  
    );        
};

export default Nav ;
