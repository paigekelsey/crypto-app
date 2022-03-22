import {
  AppBar,
  Container,
  MenuItem,
  Select,
  Toolbar,
  Typography,
} from "@material-ui/core";
import {
  makeStyles,
} from "@material-ui/core/styles";
// import InfoIcon from '@mui/icons-material/Info';
// import MenuBookIcon from '@mui/icons-material/MenuBook';
import { useHistory } from "react-router-dom";
import { CryptoState } from "../CryptoContext";



const useStyles = makeStyles(() => ({
  title: {
 textAlign:"center",
 color: "#5C6BC0",
 '&:hover': {
    color: "#E05A47",
    value: "icon"
},
    fontFamily: "Montserrat",
    fontWeight: "bold",
    cursor: "pointer",
  },
  menuIcon: {
    flex:"1",
    textAlign:'right',
    justifyContent:"space-between",
    cursor:"pointer",
    alignItems:"center"
  },
  icons: {
    margin:"1rem",
    color: "#5C6BC0",
    '&:hover': {
       color: "#E05A47",
  }
}}));



function Header() {
  const classes = useStyles();
  const { currency, setCurrency } = CryptoState();
  const history = useHistory();

  return (

      <AppBar color="transparent" position="static">
        <Container style={{padding:"2rem", width:"100%"}}>
          <Toolbar>
          
            <Typography
              onClick={() => history.push(`/`)}
              variant="h6"
              className={classes.title}
            >
                   <img
             src='./2.png'
             className={classes.title}
             width='100px' height='100px'
             alt="crypto"/>
              cryptoCipher
            </Typography>
            {/* <div className={classes.menuIcon}>
              <div id="dict-text">
              <p className="text-dict">Glossary</p>
            <MenuBookIcon
              onClick={() => history.push(`/glossary`)}
              variant="h6"
              fontSize="medium"
              className={classes.icons}
              id="hover"
           />
           </div>
           <div id="about-text">
             <p className="text-about">About</p>
            <InfoIcon
              onClick={() => history.push(`/about`)}
              variant="h6"
              fontSize="medium"
              className={classes.icons}
              id="hover"
            />
            </div>
             </div> */}
            
            <Select
              variant="outlined"
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={currency}
              style={{ width: 100, height: 40, marginLeft: 15 }}
              onChange={(e) => setCurrency(e.target.value)}
             
            >
              <MenuItem value={"USD"}>USD</MenuItem>
              <MenuItem value={"INR"}>INR</MenuItem>
              <MenuItem value={"EUR"}>EUR</MenuItem>
              <MenuItem value={"JPY"}>JPY</MenuItem>
            </Select>
        
          </Toolbar> 
        </Container>
      </AppBar>

  );
}

export default Header;
