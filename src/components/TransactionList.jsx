import React, { useEffect, useState } from "react";
import { List, ListItem, ListItemText } from "@mui/material";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

export function TransactionList(props) {
  const [incomes, setIncomes] = useState(props.data);


  useEffect(() => {
    setIncomes(props.data);
  }, [props.data]);

  return (
    <List>
      {incomes.map((income, index) => (
        <Card>
          <CardContent>
            <ListItem key={index}>
              <ListItemText primary={income.name} secondary={`$${income.amount}`} />
            </ListItem>
          </CardContent>
        </Card>
      ))}
    </List>
  );
}
