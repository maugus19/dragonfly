import React from "react";
import { Container, Typography } from "@mui/material";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";
import useExpenseStore from "../context/FinanceStore";
import Grid from '@mui/material/Grid2';
import Box from '@mui/material/Box';

function Reports() {
  const expenses = useExpenseStore((state) => state.expenses);
  const incomes = useExpenseStore((state) => state.incomes);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid size={12}>
          <Typography variant="h4">Reportes</Typography>

        </Grid>
        <Grid size={6}>
          <Typography variant="h6">Gastos</Typography>
          <BarChart width={500} height={300} data={expenses}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="amount" fill="#ff5252" />
          </BarChart>
        </Grid>
        <Grid size={6}>
          <Typography variant="h6">Ingresos</Typography>
          <BarChart width={500} height={300} data={incomes}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="amount" fill="#4caf50" />
          </BarChart>
        </Grid>

      </Grid>
    </Box>
  );
}

export default Reports;