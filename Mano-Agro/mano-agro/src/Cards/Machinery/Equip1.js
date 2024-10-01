import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function Mach2() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="400"
          img src="https://arkheno.com/wp-content/uploads/2022/03/how-to-install-the-tillers-correctly-on-a-power_1.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Mano-Agro Walking Ploughing Tractor
          </Typography>
          <Typography variant="body2" color="text.secondary" style={{fontSize: 20}}>
          This is a walking tractor, a manually operated piece of machinery used for agricultural purposes. The tractor is predominantly blue with red and green components. It has a red engine mounted on top, with visible exhaust and air filter. 
          The machine is equipped with large black tires that have deep treads for enhanced grip on various terrains
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