import { Button } from "@material-ui/core";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./Compare.css";
import InvestedVsNoninvested from "./Invsnon";
import LumpSum from "./LumpSum";
import SIP from "./SIP";

function Compare() {
  return (
    <Router>
      <div>
        <div class="headers">
          <Button variant="contained">
            <Link to="/diff">Invested VS Not Invested</Link>
          </Button>
          <Button variant="contained">
            <Link to="/monthly">Invested Monthly</Link>
          </Button>
          <Button variant="contained">
            <Link to="/lumpsum">Invested Lump Sum ammount</Link>
          </Button>
        </div>
        <Switch>
          <Route path="/diff">
            <InvestedVsNoninvested />
          </Route>
          <Route path="/monthly">
            <SIP />
          </Route>
          <Route path="/lumpsum">
            <LumpSum />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default Compare;
