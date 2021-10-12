import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import Graph1 from "./Graph1";

const initialState = {
  investment: "",
  period: "",
  expected_return: "",
};

export const chartColors = ["#e34522", "#14b514"];

function Invsnon() {
  const [formData, setFormData] = useState(initialState);
  const [investedTotal, setinvestedTotal] = useState(0);
  const [investedTotal1, setinvestedTotal1] = useState(0);
  const [not_investedTotal, setnotinvestedTotal] = useState(0);
  const [profit, setprofitGraph] = useState([]);
  const [loss, setlossGraph] = useState([]);
  const [showData, setShowData] = useState(false);

  const calculateTotal = () => {
    var investment = +formData.investment;
    var period = +formData.period;
    var expected_return = +formData.expected_return;
    var profit = investment;
    var loss = investment;
    var investedGraph = [];
    var not_investedGraph = [];

    for (var year = 1; year <= period; year++) {
      var one_year_return = Math.round((profit / 100) * expected_return);
      profit = Math.round(profit + one_year_return);
      var inflation = Math.round((loss / 100) * 6);
      loss = Math.round(loss - inflation);
      investedGraph.push(profit);
      not_investedGraph.push(loss);
    }
    const investedGraphData = investedGraph[investedGraph.length - 1] || 0;
    const not_investedGraphData =
      not_investedGraph[not_investedGraph.length - 1] || 0;
    setinvestedTotal(investedGraphData);
    setnotinvestedTotal(not_investedGraphData);
    setprofitGraph(investedGraph);
    setlossGraph(not_investedGraph);
    setShowData();
    setShowData(true);
  };

  return (
    <div>
      <Card class="container" variant="outlined">
        <CardContent>
          <Typography>
            <h1>If you invest Rs x vs If you not invest Rs x</h1>
          </Typography>
          <div class="inputFields">
            <TextField
              required
              id="outlined-basic"
              label="Invested Amount (Rs)"
              variant="outlined"
              onChange={(e) =>
                setFormData({ ...formData, investment: e.target.value })
              }
            />
            <TextField
              required
              id="outlined-basic"
              label="Investment period (years)"
              variant="outlined"
              onChange={(e) =>
                setFormData({ ...formData, period: e.target.value })
              }
            />
            <TextField
              required
              id="outlined-basic"
              label="Expected Return (%)"
              variant="outlined"
              onChange={(e) =>
                setFormData({ ...formData, expected_return: e.target.value })
              }
            />
          </div>
          <Button
            fullWidth
            variant="outlined"
            color="primary"
            onClick={calculateTotal}
          >
            Calculate
          </Button>
          {showData && (
            <Box>
              Invested Amount Today: {investedTotal}
              <br />
              Not Invested Amount: ₹ {not_investedTotal}
              <br />
              (Note: Assuming 6% inflation rate)
            </Box>
          )}
        </CardContent>
      </Card>
      <Graph1 profit={profit} loss={loss} />
    </div>
  );
}

export default Invsnon;
