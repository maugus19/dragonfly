import React from "react";
import { List, ListItem, ListItemText } from "@mui/material";
import useExpenseStore from "../context/ExpenseContext";

function ExpenseList() {
  const expenses = useExpenseStore((state) => state.expenses);

  return (
    <List>
      {expenses.map((expense, index) => (
        <ListItem key={index}>
          <ListItemText primary={expense.name} secondary={`$${expense.amount}`} />
        </ListItem>
      ))}
    </List>
  );
}

export default ExpenseList;