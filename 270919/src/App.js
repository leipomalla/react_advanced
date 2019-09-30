import React from "react";
import "./App.css";
import AppBar from "@material-ui/core/AppBar";
import Footer from "./Footer";
import Grid from "@material-ui/core/Grid";
import MainNavigation from "./MainNavigation";
import { makeStyles } from "@material-ui/styles"; //kun tuodaan Hookilla, laitetaan Shirleyhin
import Post from "./Post";
import ToolBar from "@material-ui/core/ToolBar";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    padding: 25,
    background: "grey"
  },
  title: {
    flexGrow: 1
  },
  list: {}
});

const App = () => {
  const classes = useStyles();
  return (
    <div>
      <AppBar className={classes.root}>
        <ToolBar>
          <Typography variant="h5" className={classes.title}>
            Material UI example
          </Typography>
          <MainNavigation></MainNavigation>
        </ToolBar>
      </AppBar>
      <Post></Post>

      <Footer justify="right"></Footer>
    </div>
  );
};

export default App;
