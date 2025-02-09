import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import useExpenseStore from "../context/ExpenseContext";

function IncomeForm() {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const addIncome = useExpenseStore((state) => state.addIncome);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && amount) {
      addIncome({ name, amount: parseFloat(amount) });
      setName("");
      setAmount("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField label="Ingreso" value={name} onChange={(e) => setName(e.target.value)} fullWidth margin="normal" />
      <TextField label="Cantidad" type="number" value={amount} onChange={(e) => setAmount(e.target.value)} fullWidth margin="normal" />
      <Button type="submit" variant="contained" color="primary">Agregar Ingreso</Button>
    </form>
  );
}

export default IncomeForm;