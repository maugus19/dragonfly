import React from "react";
import { Container, Typography } from "@mui/material";
import useExpenseStore from "../context/FinanceStore";
import Grid from '@mui/material/Grid2';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import { CustomBarChart } from "../components/Chart";

function Reports() {
  const expenses = useExpenseStore((state) => state.expenses);
  const incomes = useExpenseStore((state) => state.incomes);

  return (
    <Container>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid size={12}>
            <Typography variant="h4">Reportes</Typography>
            <Divider />
            &nbsp;
          </Grid>
          <Grid size={6}>
            <CustomBarChart
            title={'Gastos'}
            data={expenses}
            xKey={'name'}
            barKey={'amount'}
            />
          </Grid>
          <Grid size={6}>
            <CustomBarChart
              title='Ingresos'
              xKey='name'
              barKey='amount'
              data={incomes}
            />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default Reports;