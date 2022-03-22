import { Container, makeStyles, Typography } from "@material-ui/core";
import Carousel from "./Carousel";

const useStyles = makeStyles((theme) => ({
  banner: {
    // backgroundImage: "url(./ban5.png)",

  
  },
  bannerContent: {
    height: 400,
    display: "flex",
    flexDirection: "column",
    paddingTop: 25,
    justifyContent: "space-around",
  },
  tagline: {
    display: "flex",
    height: "40%",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
  },
  carousel: {
    height: "50%",
    display: "flex",
    alignItems: "center",
  },
}));

function Banner() {
  const classes = useStyles();

  return (
    <div className={classes.banner}>
      <Container className={classes.bannerContent}>
        <div className={classes.tagline}>
          <Typography
            variant="h2"
            style={{
              fontWeight: "bold",
              marginBottom: 15,
              fontFamily: "Montserrat",
              color:"#5C6BC0"
            }}
          >
        
            A cipher for your crypto. 
          </Typography>
          <Typography
            variant="subtitle2"
            style={{
              color: "white",
              textTransform: "capitalize",
              fontFamily: "Montserrat",
            }}
          >
            A cipher for your crypto. 
          </Typography>
        </div>
        <Carousel />
      </Container>
    </div>
  );
}

export default Banner;
