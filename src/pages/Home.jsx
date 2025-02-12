import React, { useState } from "react";
import { Container, Typography } from "@mui/material";
import TransactionForm from "../components/TransactionForm";
import TransactionList from "../components/TransactionList";
import useExpenseStore from "../context/FinanceStore";

function Home() {
  const expenses = useExpenseStore((state) => state.expenses);

  return (
    <Container>
      <Typography variant="h4">Registro de Gastos</Typography>
      <TransactionForm type={'expenses'} />
      <TransactionList data={expenses}/>
    </Container>
  );
}

export default Home;