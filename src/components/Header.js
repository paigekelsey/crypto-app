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
import { useHistory } from "react-router-dom";
import { CryptoState } from "../CryptoContext";


const useStyles = makeStyles(() => ({
  title: {
    flex: 1,
    color: "#5C6BC0",
    fontFamily: "Montserrat",
    fontWeight: "bold",
    cursor: "pointer",
  },
}));



function Header() {
  const classes = useStyles();
  const { currency, setCurrency } = CryptoState();

  const history = useHistory();

  return (

      <AppBar color="transparent" position="static">
        <Container style={{padding:"2rem"}}>
          <Toolbar>
            <Typography
              onClick={() => history.push(`/about`)}
              variant="h6"
              className={classes.title}
              style={{ fontSize: 18 }}

            >
              About
            </Typography>
            <Typography
              onClick={() => history.push(`/glossary`)}
              variant="h6"
              className={classes.title}
              style={{ fontSize: 18 }}

            >
              Glossary
            </Typography>
            <img
             src='./2.png'
             width='100px' height='100px'
             alt="crypto"/>
            <Typography
              onClick={() => history.push(`/`)}
              variant="h6"
              className={classes.title}
            >
              cryptoCipher
            </Typography>
           
            {/* <Button color="inherit">Login</Button>*/}

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
