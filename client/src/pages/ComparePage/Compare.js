import {
  Box,
  Button,
  Card,
  CardContent,
  FormControl,
  Input,
  InputLabel,
} from "@material-ui/core";
import React, { useState } from "react";
import "./Compare.css";

function Compare() {
  const [page, setPage] = useState(1);

  const openMonthly = () => {
    setPage(1);
  };

  const openLumpSum = () => {
    setPage(0);
  };

  return (
    <div className="container">
      <Card className="root" variant="outlined">
        <div className="upButtons">
          <Button onClick={openMonthly}>Monthly investemt</Button>
          <Button onClick={openLumpSum}>Lump Sum</Button>
        </div>

        {page ? (
          // Monthly Investment
          <CardContent>
            <FormControl>
              <InputLabel>Monthly Investment Amount (Rs)</InputLabel>
              <Input></Input>
            </FormControl>

            <FormControl>
              <InputLabel>Investment Period (years)</InputLabel>
              <Input></Input>
            </FormControl>

            <FormControl>
              <InputLabel>Expected Return (%)</InputLabel>
              <Input></Input>
            </FormControl>

            <Button> Calculate </Button>
            <Box>
              Total Amount <br />
              Invested Amount
            </Box>
          </CardContent>
        ) : (
          // Lump Sum
          <CardContent>
            <FormControl>
              <InputLabel>Investment Amount (Rs)</InputLabel>
              <Input></Input>
            </FormControl>

            <FormControl>
              <InputLabel>Investment Period (years)</InputLabel>
              <Input></Input>
            </FormControl>

            <FormControl>
              <InputLabel>Expected Return (%)</InputLabel>
              <Input></Input>
            </FormControl>

            <Button> Calculate </Button>
            <Box>
              Total Amount <br />
              Invested Amount
            </Box>
          </CardContent>
        )}
      </Card>
    </div>
  );
}

export default Compare;
