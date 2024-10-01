import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

// const bull = (
//   <Box
//     component="span"
//     sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
//   >
//     •
//   </Box>
// );

const card = (
  <React.Fragment>
    <CardContent>
      <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
        ABOUT US
      </Typography>
      <Typography variant="h6" component="div" textAlign="left">
        MISSION:
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary" textAlign="left">
      To source high quality implements and increase agricultural production
      </Typography>
      <Typography variant="h6" component="div" textAlign="left">
      VISION:
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary" textAlign="left">
      To source high quality implements and increase agricultural production
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Learn More</Button>
    </CardActions>
  </React.Fragment>
);

export default function Pcard() {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}