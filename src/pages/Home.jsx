import React, { useState } from "react";
import { Container, Typography } from "@mui/material";
import { TransactionForm } from "../components/TransactionForm";
import { TransactionList } from "../components/TransactionList";
import useExpenseStore from "../context/FinanceStore";
import Grid from '@mui/material/Grid2';
import Box from '@mui/material/Box';

function Home() {
  const expenses = useExpenseStore((state) => state.expenses);

  return (
    <Container>
      <Typography variant="h4">Registro de Gastos</Typography>
      &nbsp;
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid size={4}>
            <TransactionForm type={'expenses'} />
          </Grid>
          <Grid size={8}>
            <TransactionList data={expenses} />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default Home;