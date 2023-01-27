import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
   navlogoLg:{
    margin:'10px',
    display:'none',
    [theme.breakpoints.up("sm")]:{ display : 'block'}
   },
   navlogoSm:{
    display:'block',
    [theme.breakpoints.up("sm")]:{ display : 'none'}
   },
   appbar:{
    backgroundColor:'#fffdd0',
    color:'#612D08'

   },
  
   menu_button:{ 
      
      [theme.breakpoints.down("xs")]:{ display:'none'},
     //[theme.breakpoints.down("md")]:{ marginLeft:'10%'},
     [theme.breakpoints.up("xs")]:{ marginLeft:'40%'},
     [theme.breakpoints.up("md")]:{ marginLeft:'64%'}


   },
   about_button:{
      [theme.breakpoints.down("xs")]:{ display:'none'},
      marginLeft:'4%'
   },
   contact_button:{
      [theme.breakpoints.down("xs")]:{ display:'none'},
      marginLeft:'4%'
   },
   Drawer_button:{
     marginLeft:'73%',
      [theme.breakpoints.up("sm")]:{display:'none' },
      
   }
}));
export default useStyles ;