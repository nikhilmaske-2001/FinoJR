import { AppBar, Button, Toolbar } from "@material-ui/core";
import "./App.css";
import Compare from "./pages/ComparePage/Compare";

function App() {
  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <div className="topbar">
            <div className="leftButtons">
              <Button color="inherit">Home</Button>
              <Button color="inherit">Compare</Button>
              <Button color="inherit">Educational Videos</Button>
              <Button color="inherit">Quiz</Button>
              <Button color="inherit">Game</Button>
            </div>
            <div className="rightButtons">
              <Button color="inherit">Login</Button>
              <Button color="inherit">Register</Button>
            </div>
          </div>
        </Toolbar>
      </AppBar>
      <Compare />
    </div>
  );
}

export default App;
