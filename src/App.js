import { makeStyles } from "@material-ui/core";
import Homepage from "./Pages/HomePage";
import PageM from "./Pages/About";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import CoinPage from "./Pages/CoinPage";
import Header from "./components/Header";

const useStyles = makeStyles(() => ({
  App: {
    backgroundColor: "white",
    color: "5C6BC0",
    minHeight: "100vh",
  },
}));

function App() {
  const classes = useStyles();

  return (
    <BrowserRouter>
      <div className={classes.App}>
        <Header />
     
        <Route path="/" component={Homepage} exact />
        <Route path="/coins/:id" component={CoinPage} exact />
        <Route path="/about" component={PageM} exact />
      </div>
    </BrowserRouter>
  );
}

export default App;
