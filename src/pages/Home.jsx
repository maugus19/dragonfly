import React, { useState } from "react";
import { Container, Typography } from "@mui/material";
import ExpenseForm from "../components/ExpenseForm";
import ExpenseList from "../components/ExpenseList";

function Home() {
  return (
    <Container>
      <Typography variant="h4">Registro de Gastos</Typography>
      <ExpenseForm />
      <ExpenseList />
    </Container>
  );
}

export default Home;