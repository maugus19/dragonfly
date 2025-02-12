import React, { useEffect, useState } from "react";
import { List, ListItem, ListItemText } from "@mui/material";

function TransactionList(props) {
  const [incomes, setIncomes] = useState(props.data);

  
  useEffect(()=>{
    setIncomes(props.data);
  },[props.data]);

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

export default TransactionList;