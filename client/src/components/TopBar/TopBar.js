import React from "react";
import { AppBar, Button, Toolbar } from "@material-ui/core";
import "./TopBar.css";

function TopBar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <div className="topbar">
          <div className="leftButtons">
            <Button color="inherit" className="leftButton">
              Home
            </Button>
            <Button color="inherit" className="leftButton">
              Compare
            </Button>
            <Button color="inherit" className="leftButton">
              Educational Videos
            </Button>
            <Button color="inherit" className="leftButton">
              Quiz
            </Button>
            <Button color="inherit" className="leftButton">
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
