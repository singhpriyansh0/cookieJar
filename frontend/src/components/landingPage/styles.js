import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
   landingImage:{
      
      [theme.breakpoints.down("xs")]:{  marginTop:'7vh',height:'150vw'},
      //[theme.breakpoints.down("xs")]:{ marginTop:'8vh',height:'58rem'},
      [theme.breakpoints.up("sm")]:{ marginTop:'8vh',height:'88rem'},
      [theme.breakpoints.up("md")]:{ marginTop:'12vh',height:'144rem'},
      
   },
   text:{
   
      [theme.breakpoints.down("xs")]:{   fontSize:'3rem', marginTop:'-75vh'},
      [theme.breakpoints.up("sm")]:{  fontSize:'6rem', marginTop:'-210vh'},
      [theme.breakpoints.up("md")]:{  fontSize:'10rem', marginTop:'-290vh',},
      fontWeight:'300',
      color:'white',
      
      },
   text2:{
      
      color:'white',
      [theme.breakpoints.down("xs")]:{   fontSize:'1.7rem'},
      [theme.breakpoints.up("sm")]:{  fontSize:'3rem'},
      [theme.breakpoints.up("md")]:{  fontSize:'5rem'},
      fontWeight:'200'
   }
}));
export default useStyles ;