import { Container, Typography } from "@mui/material";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';


export function CustomBarChart(props) {
  return (
    <Paper elevation={2}>
      <Container>
        <Typography variant="h6" >{props.title}</Typography>
        <Divider />
        &nbsp;
        <BarChart width={500} height={300} data={props.data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey={props.xKey} />
          <YAxis />
          <Tooltip />
          <Bar dataKey={props.barKey} fill="#ff5252" />
        </BarChart>
      </Container>
    </Paper>
  );
}
