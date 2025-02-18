
import React, { useEffect, useState } from "react";
import { TextField, Button, InputLabel, Select, MenuItem } from "@mui/material";
import useExpenseStore from "../context/FinanceStore";
import { getCategories } from "../context/api.service";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import Divider from '@mui/material/Divider';
import CardActions from '@mui/material/CardActions';
import { DatePicker } from '@mui/x-date-pickers/DatePicker'

export function TransactionForm(props) {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [categories, setCategories] = useState([]);
  const [description, setDescription] = useState('')
  const [recurring, setRecurring] = useState(false);
  const [date, setDate] = useState(new Date());

  const addTransaction = useExpenseStore((state) => state.addTransaction);

  useEffect(() => {
    load();
  }, []);

  const load = async () => {
    setCategories(await getCategories());
  }

  const clearForm = () => {
    setName('');
    setAmount('');
    setCategory('');
    setDescription('');
    setRecurring(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && amount) {
      addTransaction({ 
        name,
        amount: parseFloat(amount) * (props.type === 'expenses'? -1 : 1),
        description,
        recurring,
        category,
        date
      }, props.type);
      clearForm();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Card>
        <CardContent>
          <TextField label="Cantidad" type="number" value={amount} onChange={(e) => setAmount(e.target.value)} fullWidth margin="normal" />
          <TextField label="Transaccion" value={name} onChange={(e) => setName(e.target.value)} fullWidth margin="normal" />
          <TextField label="Descripcion" value={description} onChange={(e) => setDescription(e.target.value)} fullWidth margin="normal" />
          <FormControlLabel control={<Switch onChange={(e) => {
            setRecurring(e.target.checked);
            }} value={recurring}/>} label="Recurrente" />
          <InputLabel>Categoria</InputLabel>
          <Select
            value={category}
            label="Categoria"
            onChange={(e) => setCategory(e.target.value)}
            fullWidth
          >
            {
              categories.map(item => {
                return <MenuItem key={item} value={item}>{item}</MenuItem>
              })
            }
          </Select>
          <DatePicker closeOnSelect onChange={(e)=> setDate(e)} value={date}/>
          <Divider />
          <CardActions>
            <Button type="submit" variant="contained" color="primary">Agregar transaccion</Button>
          </CardActions>
        </CardContent>
      </Card>
    </form>
  );
}
