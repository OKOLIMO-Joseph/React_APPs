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
        MORE ABOUT US
      </Typography>
      <Typography variant="body" component="div" textAlign="left">
      Mano agro in puts is a company registered in Uganda involved importation and distribution of agricultural implements ie fertilisers, pesticides, insecticides, agro machinery, fungicides,.

      </Typography>
      {/* <Typography sx={{ mb: 1.5 }} color="text.secondary" textAlign="left">
      To source high quality implements and increase agricultural production
      </Typography> */}
      <Typography variant="h6" component="div" textAlign="left">
      OUR SOCIAL IMPACT
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary" textAlign="left">
      Mano agro inputs distributes quality products to all its clients around the world.

      Mano agro inputs envisions a time when every farmer acquires the right skills and implements to use in his garden to attain huge harvest.

      Mano skills farmers with the right agronomic practices. With its slogan " bridging agro technologies,  mano agro inputs seeks to build and enhance cost effective practices among farmers that lead to high yields especially in resource constrained areas.
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Learn More</Button>
    </CardActions>
  </React.Fragment>
);

export default function Pcard1() {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}