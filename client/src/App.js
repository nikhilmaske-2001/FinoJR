import React from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from "./pages/HomePage/Home";
import Compare from "./pages/ComparePage/Compare";
import TopBar from "./components/TopBar/TopBar";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <TopBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/compare" component={Compare} />
        {/* <Route exact path="/educational-videos" component={Home} />
        <Route exact path="/quiz" component={Home} />
        <Route exact path="/game" component={Home} />
        <Route exact path="/register" component={Home} /> */}
      </Switch>
    </>
  );
}

export default App;
