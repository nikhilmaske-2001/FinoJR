import {
  Button,
  Card,
  CardContent,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";

const initialState = {
  investment: "",
  period: "",
  expected_return: "",
};

function Invsnon() {
  const [formData, setFormData] = useState(initialState);

  const calculateTotal = () => {
    console.log(formData);
  };

  return (
    <div>
      <Card class="container">
        <CardContent>
          <Typography>
            <h1>If you invest Rs x vs If you not invest Rs x</h1>
          </Typography>
          <div class="inputFields">
            <TextField
              required
              id="outlined-basic"
              label="Invest Amount (Rs)"
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
          <Button onClick={calculateTotal}>Calculate</Button>
        </CardContent>
      </Card>
    </div>
  );
}

export default Invsnon;
