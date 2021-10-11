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

function LumpSum() {
  const [formData, setFormData] = useState(initialState);
  const [investment, setInvestment] = useState(0);
  const [total, setTotal] = useState(0);
  const [profit, setprofitGraph] = useState([]);
  const [loss, setlossGraph] = useState([]);
  const [showData, setShowData] = useState(false);

  const calculateTotal = () => {
    var investment = +formData.investment;
    var period = +formData.period;
    var expected_return = +formData.expected_return;
    var total = investment;
    var compounded = [];

    for (var year = 1; year <= period; year++) {
      var one_year_return = Math.round((total / 100) * expected_return);
      total = total + one_year_return;
      compounded.push(total);
    }
    setprofitGraph(compounded);
    setlossGraph([]);
    setTotal(total);
    setInvestment(investment);
    setShowData(true);
  };

  return (
    <div>
      <Card class="container" variant="outlined">
        <CardContent>
          <Typography>
            <h1>If you invest Rs x for period y years</h1>
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
              Invested Amount: ₹{investment} <br />
              Total Amount: ₹ {total} <br />
              Wealth Gain: ₹ {total - investment}
              <br />
            </Box>
          )}
        </CardContent>
      </Card>
      <Graph1 profit={profit} loss={loss} />
    </div>
  );
}

export default LumpSum;
