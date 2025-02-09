
import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import useExpenseStore from "../context/ExpenseContext";

function ExpenseForm() {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const addExpense = useExpenseStore((state) => state.addExpense);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && amount) {
      addExpense({ name, amount: parseFloat(amount) });
      setName("");
      setAmount("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField label="Gasto" value={name} onChange={(e) => setName(e.target.value)} fullWidth margin="normal" />
      <TextField label="Cantidad" type="number" value={amount} onChange={(e) => setAmount(e.target.value)} fullWidth margin="normal" />
      <Button type="submit" variant="contained" color="primary">Agregar Gasto</Button>
    </form>
  );
}

export default ExpenseForm;