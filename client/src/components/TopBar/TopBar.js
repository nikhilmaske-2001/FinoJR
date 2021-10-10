import React from "react";
import { AppBar, Button, Toolbar } from "@material-ui/core";
import "./TopBar.css";
import Home from "./pages/HomePage/Home";

function TopBar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <div className="topbar">
          <div className="leftButtons">
            <Button color="inherit" component={Home} className="leftButton" to="/">
              Home
            </Button>
            <Button color="inherit" className="leftButton" to="/compare">
              Compare
            </Button>
            <Button color="inherit" className="leftButton" to="/educational-videos">
              Educational Videos
            </Button>
            <Button color="inherit" className="leftButton" to="/quiz">
              Quiz
            </Button>
            <Button color="inherit" className="leftButton" to="/game">
              Game
            </Button>
          </div>
          <div className="rightButtons">
            <Button color="inherit" className="rightButton">
              Login
            </Button>
            <Button color="inherit" className="rightButton">
              Register
            </Button>
          </div>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default TopBar;
