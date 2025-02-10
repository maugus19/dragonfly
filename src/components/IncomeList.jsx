import React from "react";
import { List, ListItem, ListItemText } from "@mui/material";
import useExpenseStore from "../context/FinanceStore";

function IncomeList() {
  const incomes = useExpenseStore((state) => state.incomes);

  return (
    <List>
      {incomes.map((income, index) => (
        <ListItem key={index}>
          <ListItemText primary={income.name} secondary={`$${income.amount}`} />
        </ListItem>
      ))}
    </List>
  );
}

export default IncomeList;