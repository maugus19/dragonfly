import React, { useEffect, useState } from "react";
import { List, ListItem, ListItemText } from "@mui/material";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

export function TransactionList(props) {
  const [transactions, setTransactions] = useState(props.data);


  useEffect(() => {
    setTransactions(props.data);
  }, [props.data]);

  return (
    <List>
      {transactions.map((transaction, index) => (
        <Card key={index}>
          <CardContent>
            <ListItem >
              <ListItemText primary={transaction.name} secondary={`$${transaction.amount}`}>{transaction.description}</ListItemText>
            </ListItem>
          </CardContent>
        </Card>
      ))}
    </List>
  );
}
