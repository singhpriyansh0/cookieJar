import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
   About:{
   
      [theme.breakpoints.down("xs")]:{   fontSize:'3rem', marginTop:'70vh'},
      [theme.breakpoints.up("sm")]:{  fontSize:'6rem', marginTop:'50vh'},
      [theme.breakpoints.up("md")]:{  fontSize:'7rem', marginTop:'100vh'},
      fontWeight:'300',
      color:'white',
      
      },
   text:{
      
      color:'white',
      [theme.breakpoints.down("xs")]:{   fontSize:'1rem'},
      [theme.breakpoints.up("sm")]:{  fontSize:'1rem'},
      [theme.breakpoints.up("md")]:{  fontSize:'2rem'},
      fontWeight:'200'
   }
}));
export default useStyles ;