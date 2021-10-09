import React from "react";
import {
  Button,
  Card,
  CardContent,
  FormControl,
  Input,
  InputLabel,
  Typography,
} from "@material-ui/core";
import "./Compare.css";

function Invsnon() {
  return (
    <div>
      <Typography>
        <h1>What if you invested x Rs vs not invested that x Rs</h1>
      </Typography>
      <Card class="root" variant="outlined">
        <CardContent class="content">
          <FormControl>
            <InputLabel>You invested (Rs)</InputLabel>
            <Input></Input>
          </FormControl>
          <FormControl>
            <InputLabel>Investment period (years)</InputLabel>
            <Input></Input>
          </FormControl>
          <FormControl>
            <InputLabel>Expected Return (%)</InputLabel>
            <Input></Input>
          </FormControl>
          <Button className="calcbutton">Calculate</Button>
        </CardContent>
      </Card>
    </div>
  );
}

export default Invsnon;
