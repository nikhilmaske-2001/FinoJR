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

function SIP() {
  const [formData, setFormData] = useState(initialState);
  const [investedData, setinvestedData] = useState({});
  const [compondedData, setcompoundedData] = useState({});
  const [investmentAmount, setInvestmentAmount] = useState(0);
  const [total, settotal] = useState(0);
  const [showData, setShowData] = useState(false);

  const calculateTotal = () => {
    var monthly_investment = +formData.investment;
    var period = +formData.period;
    var expected_return = +formData.expected_return;
    var investment_amount = 0;
    var total = 0;
    var invested_graph = [];
    var expected_graph = [];

    for (var year = 1; year <= period; year++) {
      for (var month = 1; month <= 12; month++) {
        total = total + monthly_investment;
        investment_amount = investment_amount + monthly_investment;
      }
      var one_year_return = Math.round((total / 100) * expected_return);
      total = Math.round(total + one_year_return);
      invested_graph.push(investment_amount);
      expected_graph.push(total);
    }
    investment_amount = Math.round(investment_amount);
    total = Math.round(total);
    setinvestedData(invested_graph);
    setcompoundedData(expected_graph);
    setInvestmentAmount(investment_amount);
    settotal(total);
    setShowData(true);
  };

  return (
    <div>
      <Card class="container" variant="outlined">
        <CardContent>
          <Typography>
            <h1>If you invest Rs x every month for period y years</h1>
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
              Invested Amount: ₹{investmentAmount} <br />
              Total Amount: ₹ {total} <br />
              Wealth Gain: ₹ {total - investmentAmount}
              <br />
            </Box>
          )}
        </CardContent>
      </Card>
      <Graph1 profit={investedData} loss={compondedData} />
    </div>
  );
}

export default SIP;
