import * as React from 'react';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

const DemoPaper = styled(Paper)(({ theme }) => ({
  width: 120,
  height: 120,
  padding: theme.spacing(2),
  ...theme.typography.body2,
  textAlign: 'center',
}));

export default function SquareCorners() {
  return (
    <Stack direction="row" spacing={10} style={{marginTop: 20, marginLeft: 150}}>
      <DemoPaper square style={{width: 500, height: 250}}><img src='https://th.bing.com/th/id/OIP.2RaoyxcQ3pcnd7jdSzcqhwAAAA?rs=1&pid=ImgDetMain' alt='World Vision Logo' /></DemoPaper>
      <DemoPaper square><img src='https://th.bing.com/th/id/OIP.h2VHjz0TsW7VCirHJ149jQAAAA?rs=1&pid=ImgDetMain' alt='MUK LOgo' /></DemoPaper>
      <DemoPaper square><img src='https://www.oxebridge.com/emma/wp-content/uploads/2018/11/worldbanklogo.jpg' alt='WB Logo' /></DemoPaper>
      <DemoPaper square>square corners</DemoPaper>
      <DemoPaper square>square corners</DemoPaper>
      <DemoPaper square>square corners</DemoPaper>
    </Stack>
  );
}
