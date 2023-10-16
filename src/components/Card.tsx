'use client';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

type DCardProps = {
  detailHeader?: string,
  title?: string,
  details?: number | string,
  details2?: number | string,
  linkLabel: string,
  callback?: () => {}
}

export function DCard(props: DCardProps) {
  return (
    <Box sx={{ minWidth: 275 }} >
      <Card variant="outlined">
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {props.detailHeader}
          </Typography>
          <Typography variant="h5" component="div">
            {(props.title)?.toLocaleUpperCase()}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {props.details}
          </Typography>
          <Typography variant="body2">
            {props.details2}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={props.callback}>{props.linkLabel}</Button>
        </CardActions>
      </Card>
    </Box>
  );
}