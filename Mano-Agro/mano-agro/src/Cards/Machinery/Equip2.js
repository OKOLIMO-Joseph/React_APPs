import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function Mach3() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="400"
          img src="https://ae01.alicdn.com/kf/S8f07db54e44b4eaba69acc754a611a85Y/Walking-Tractor-15HP-Farm-Tractor-Agricultural-Machinery-Cultivator-Rotary-Cultivator.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Mano-Agro Two-Wheeled Tractor
          </Typography>
          <Typography variant="body2" color="text.secondary" style={{fontSize: 20}}>
          This is a two-wheeled tractor, also known as a walk-behind tractor or hand tractor. The tractor is predominantly red and black, with touches of orange and grey. It has two large, rugged wheels designed for traction on various terrains. The engine is prominently displayed at the center-top of the machine. There are handles extending backward from the machine to allow an operator to control it while walking behind
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Read More
        </Button>
      </CardActions>
    </Card>
  );
}