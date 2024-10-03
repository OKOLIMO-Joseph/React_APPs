import * as React from 'react';
import Box from '@mui/material/Box';
import Switch from '@mui/material/Switch';
import Paper from '@mui/material/Paper';
import Grow from '@mui/material/Grow';
import FormControlLabel from '@mui/material/FormControlLabel';
import Pcard from '../Cards/Infocard';
// import Pcard1 from './Cards/Infocard1';
// import Pcar2 from './Cards/Infocard2';
// import { Typography } from '@mui/material';

const icon = (
  <Paper sx={{ m: 1, width: 500, height: 300 }} elevation={4}>
    {/* <svg>
      <Box
        component="polygon"
        points="0,100 50,00, 100,100"
        sx={{
          fill: (theme) => theme.palette.common.white,
          stroke: (theme) => theme.palette.divider,
          strokeWidth: 1,
        }}
      />
    </svg> */}
    <Pcard />
    {/* <Pcard1 />
    <Pcar2 /> */}
  </Paper>
);

export default function About() {
  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  return (
    <Box sx={{ height: 400, backgroundColor: 'green' }}>
        
      <FormControlLabel
        control={<Switch checked={checked} onChange={handleChange} />}
        label="Show About Us"
      />
      <Box sx={{ display: 'flex' }}>
      
        <Grow in={checked}>{icon}</Grow>
        <Grow in={checked}>{icon}</Grow>
        {/* Conditionally applies the timeout prop to change the entry speed. */}
        <Grow
          in={checked}
          style={{ transformOrigin: '0 0 0' }}
          {...(checked ? { timeout: 1000 } : {})}
        >
          {icon}
        </Grow>
      </Box>
      
    </Box>
  );
}