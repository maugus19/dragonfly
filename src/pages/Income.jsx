import React from "react";
import { Container, Typography } from "@mui/material";
import {TransactionForm} from "../components/TransactionForm";
import {TransactionList} from "../components/TransactionList";
import useExpenseStore from "../context/FinanceStore";
import Grid from '@mui/material/Grid2';
import Box from '@mui/material/Box';
function Income() {
  const incomes = useExpenseStore((state) => state.incomes);

  return (
    <Container>
      <Typography variant="h4">Registro de Ingresos</Typography>
      &nbsp;
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid size={4}>
            <TransactionForm type={'incomes'} />
          </Grid>
          <Grid size={8}>
            <TransactionList data={incomes} />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default Income;