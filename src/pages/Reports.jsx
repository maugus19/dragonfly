import React from "react";
import { Container, Typography } from "@mui/material";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";
import useExpenseStore from "../context/FinanceStore";

function Reports() {
  const expenses = useExpenseStore((state) => state.expenses);
  const incomes = useExpenseStore((state) => state.incomes);

  return (
    <Container>
      <Typography variant="h4">Reportes</Typography>
      <Typography variant="h6">Gastos</Typography>
      <BarChart width={500} height={300} data={expenses}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="amount" fill="#ff5252" />
      </BarChart>
      <Typography variant="h6">Ingresos</Typography>
      <BarChart width={500} height={300} data={incomes}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="amount" fill="#4caf50" />
      </BarChart>
    </Container>
  );
}

export default Reports;