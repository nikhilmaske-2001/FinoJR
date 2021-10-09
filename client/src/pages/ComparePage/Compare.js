import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./Compare.css";
import InvestedVsNoninvested from "./Invsnon";
import LumpSum from "./LumpSum";
import SIP from "./SIP";

function Compare() {
  return (
    <Router>
      <div className="headers">
        <nav>
          <li>
            <Link to="/diff">Invested VS Not Invested</Link>
          </li>
          <li>
            <Link to="/monthly">Invested Monthly</Link>
          </li>
          <li>
            <Link to="/lumpsum">Invested Lump Sum ammount</Link>
          </li>
        </nav>
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
