import {
  Button,
  Card,
  CardContent,
  TextField,
  Toolbar,
  Typography,
} from "@material-ui/core";
import React from "react";

function Invsnon() {
  return (
    <div>
      <Card class="container">
        <CardContent>
          <Typography>
            <h1>If you invest Rs x vs If you not invest Rs x</h1>
          </Typography>
          <div class="inputFields">
            <TextField
              id="outlined-basic"
              label="Invest Amount (Rs)"
              variant="outlined"
            />
            <TextField
              id="outlined-basic"
              label="Investment period (years)"
              variant="outlined"
            />
            <TextField
              id="outlined-basic"
              label="Expected Return (%)"
              variant="outlined"
            />
          </div>
          <Button>Calculate</Button>
        </CardContent>
      </Card>
    </div>
  );
}

export default Invsnon;
