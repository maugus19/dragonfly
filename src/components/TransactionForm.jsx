
import React, { useEffect, useState } from "react";
import { TextField, Button, InputLabel, Select, MenuItem } from "@mui/material";
import useExpenseStore from "../context/FinanceStore";
import { getCategories } from "../context/api.service";

export function TransactionForm(props) {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState([]);
  const addExpense = props.type === 'expenses' ? useExpenseStore((state) => state.addExpense) 
  : useExpenseStore((state) => state.addIncome);

  useEffect(() => {
    load();
  }, []);

  const load = async () => {
    setCategories(await getCategories());
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && amount) {
      addExpense({ name, amount: parseFloat(amount) });
      setName("");
      setAmount("");
    }
  };

  const handleCategory = (event) => {
    setCategory(event.target.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <TextField label="Transaccion" value={name} onChange={(e) => setName(e.target.value)} fullWidth margin="normal" />
      <InputLabel id="demo-simple-select-label">Categoria</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={category}
        label="Categoria"
        onChange={handleCategory}
        fullWidth
      >
        {
          categories.map(item =>{
            return <MenuItem key={item} value={item}>{item}</MenuItem>
          })
        }
      </Select>
      <TextField label="Cantidad" type="number" value={amount} onChange={(e) => setAmount(e.target.value)} fullWidth margin="normal" />
      <Button type="submit" variant="contained" color="primary">Agregar transaccion</Button>
    </form>
  );
}
