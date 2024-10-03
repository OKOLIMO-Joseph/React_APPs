import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function Mach1() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="400"
          img src="https://images.squarespace-cdn.com/content/v1/54b30608e4b0cdf625e916f2/1427815857208-LUCEJRLNURSJ32CLHT44/2+wheeled+tractor+3.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Mano-Agro Walking Tractor
          </Typography>
          <Typography variant="body2" color="text.secondary" style={{fontSize: 20}}>
          This is a walking tractor, a manually operated piece of machinery used for agricultural purposes. The tractor is predominantly red and blue in color, with large, rugged wheels designed for traction on different terrains. The engine housing is red and appears to be robust and well-built. There are two long blue handles extending backward from the machine to allow manual operation.
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