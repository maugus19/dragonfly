import React from "react";
import { Container, Typography } from "@mui/material";
import IncomeForm from "../components/IncomeForm";
import IncomeList from "../components/IncomeList";

function Income() {
  return (
    <Container>
      <Typography variant="h4">Registro de Ingresos</Typography>
      <IncomeForm />
      <IncomeList />
    </Container>
  );
}

export default Income;