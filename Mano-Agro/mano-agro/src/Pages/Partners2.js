import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

export default function Partners2() {
  return (
    <ButtonGroup variant="contained" aria-label="outlined primary button group" style={{display: 'inline-block'}}>
      <Button style={{backgroundColor: 'white', width: 400, height: 400, margin: 20}}><img src='https://th.bing.com/th/id/OIP.2RaoyxcQ3pcnd7jdSzcqhwAAAA?rs=1&pid=ImgDetMain' alt='World Vision Logo' /></Button>
      <Button style={{backgroundColor: 'white', width: 400, height: 400, margin: 20}}><img src='https://th.bing.com/th/id/OIP.h2VHjz0TsW7VCirHJ149jQAAAA?rs=1&pid=ImgDetMain' alt='MUK LOgo' /></Button>
      <Button style={{backgroundColor: 'white', width: 400, height: 400, margin: 20}}><img src='https://www.oxebridge.com/emma/wp-content/uploads/2018/11/worldbanklogo.jpg' alt='WB Logo' /></Button>
      <Button style={{backgroundColor: 'white', width: 400, height: 400, margin: 20}}><img src='https://www.bing.com/images/blob?bcid=RPQQ3IzKwWwGZqJexTgVwhGC.AzQ.....0w' alt='RLP Logo' /></Button>
      <Button style={{backgroundColor: 'white', width: 400, height: 400, margin: 20}}><img src='https://pbs.twimg.com/profile_images/1564930578847354880/CwscQC6g_400x400.jpg' alt='OFPM Logo' /></Button>
      <Button style={{backgroundColor: 'white', width: 400, height: 400, margin: 20}}><img src='https://th.bing.com/th/id/OIP.K4a4TQWfQQvwqszMRMe5kwAAAA?rs=1&pid=ImgDetMain' alt='AAH Logo' /></Button>

    </ButtonGroup>
  );
}