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
          img src="https://th.bing.com/th/id/OIP.VHvKfE2FnYraq17E9GKOxAHaE9?w=850&h=569&rs=1&pid=ImgDetMain"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Mano-Agro Maize
          </Typography>
          <Typography variant="body2" color="text.secondary" style={{fontSize: 20}}>
          Maize, also known as corn, is a healthy grain that is rich in fiber, vitamins, minerals, and antioxidants 1. It is a versatile ingredient that can be used in a variety of dishes, ranging from soups and salads to casseroles and desserts. Here are some reasons why you should consider incorporating maize into your diet
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