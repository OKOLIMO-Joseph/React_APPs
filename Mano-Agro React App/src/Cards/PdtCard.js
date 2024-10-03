import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function MultiActionAreaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="400"
          img src="https://th.bing.com/th/id/OIP._9D9HpqkSu1WcN7JCwD9NgHaGG?rs=1&pid=ImgDetMain"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Mano-Agro Coffee
          </Typography>
          <Typography variant="body2" color="text.secondary" style={{fontSize: 20}}>
          Coffee is a popular beverage that is consumed worldwide. It is made from the berries harvested from species of plants1. The coffee industry is responsible for more than 2.2 million jobs in the United States alone and generates more than $100 billion in wages2. Coffee is also known to have health benefits such as reducing the risk of heart disease and stroke, boosting short-term memory, and being good for liver health
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