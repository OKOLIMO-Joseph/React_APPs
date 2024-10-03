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
          width= "200"
          height="400"
          img src="https://harvesttotable.com/wp-content/uploads/2022/02/Cabbage-bigstock-A-Garden-In-The-Garden-With-Yo-245214418-1024x683.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Mano-Agro Cabbage
          </Typography>
          <Typography variant="body2" color="text.secondary" style={{fontSize: 20}}>
          Cabbage is a versatile and nutritious choice for your garden and kitchen! It’s packed with vitamins, minerals, and antioxidants, promoting optimal health. Its crisp texture and mild flavor make it a fantastic addition to various dishes, from crunchy slaws to savory stews. 
          Easy to grow and care for, cabbage is a rewarding choice for both novice and experienced gardeners!
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