import React from "react";
import { Container, Typography } from "@mui/material";
import {TransactionForm} from "../components/TransactionForm";
import {TransactionList} from "../components/TransactionList";
import useExpenseStore from "../context/FinanceStore";

function Income() {
  const incomes = useExpenseStore((state) => state.incomes);

  return (
    <Container>
      <Typography variant="h4">Registro de Ingresos</Typography>
      <TransactionForm />
      <TransactionList data={incomes}/>
    </Container>
  );
}

export default Income;