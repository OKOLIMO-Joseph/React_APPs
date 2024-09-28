import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function R4() {
  return (
    <div id='restaurants'>
          <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="https://th.bing.com/th/id/R.146f494dd19c4281acb31f92cce90e73?rik=nYvd1BxImiPPmw&pid=ImgRaw&r=0"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          KFC Entebbe
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">View</Button>
      </CardActions>
    </Card>
    </div>
  );
}