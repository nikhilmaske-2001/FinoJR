import { Button } from "@material-ui/core";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./Compare.css";
import InvestedVsNoninvested from "./Invsnon";
import LumpSum from "./LumpSum";
import SIP from "./SIP";
import Box from "@material-ui/core/Box";

function Compare() {
  return (
    <Router>
      <div>
        <div class="headers">
          <Box px={2} py={1}>
            <Button
              style={{ backgroundColor: "#fcfc19", color: "#f5f2f3" }}
              variant="contained"
            >
              <Link
                to="/diff"
                style={{ textDecoration: "none", color: "#050505" }}
              >
                Invested VS Not Invested
              </Link>
            </Button>
          </Box>
          <Box px={2} py={1}>
            <Button
              style={{ backgroundColor: "#fcfc19", color: "#f5f2f3" }}
              variant="contained"
            >
              <Link
                to="/monthly"
                style={{ textDecoration: "none", color: "#050505" }}
              >
                Invested Monthly
              </Link>
            </Button>
          </Box>
          <Box px={2} py={1}>
            <Button
              style={{ backgroundColor: "#fcfc19", color: "#f5f2f3" }}
              variant="contained"
            >
              <Link
                to="/lumpsum"
                style={{ textDecoration: "none", color: "#050505" }}
              >
                Invested Lump Sum ammount
              </Link>
            </Button>
          </Box>
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
