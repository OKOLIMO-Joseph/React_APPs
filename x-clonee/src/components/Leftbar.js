import * as React from 'react';
import { Box, IconButton, Stack } from '@mui/material';
import XIcon from '@mui/icons-material/X';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ScatterPlotIcon from '@mui/icons-material/ScatterPlot';
import TurnedInNotIcon from '@mui/icons-material/TurnedInNot';

export default function Leftbar() {

  return (
    <Box position='sticky' sx={{flex: 2, p: 4, display: {xs: 'none', sm: 'block'}}}>
      <Stack direction='column' spacing={2}  sx={{ml: '200px'}} position='fixed'>
      <IconButton>
        <XIcon sx={{height: '60px', width: '60px'}}/>
      </IconButton>
      <IconButton>
        <HomeIcon sx={{height: '60px', width: '60px'}}/>
      </IconButton>
      <IconButton>
        <SearchIcon sx={{height: '60px', width: '60px'}}/>
      </IconButton>
      <IconButton>
        <NotificationsNoneOutlinedIcon sx={{height: '60px', width: '60px'}}/>
      </IconButton>
      <IconButton>
        <EmailOutlinedIcon sx={{height: '60px', width: '60px'}}/>
      </IconButton>
      <IconButton>
        <TurnedInNotIcon sx={{height: '60px', width: '60px'}}/>
      </IconButton>
      <IconButton>
        <ListAltOutlinedIcon sx={{height: '60px', width: '60px'}}/>
      </IconButton>
      <IconButton>
        <PersonOutlineOutlinedIcon sx={{height: '60px', width: '60px'}}/>
      </IconButton>
      <IconButton>
        <ScatterPlotIcon sx={{height: '60px', width: '60px'}}/>
      </IconButton>
      {/* <IconButton>
        <EmailOutlinedIcon sx={{height: '80px', width: '80px'}}/>
      </IconButton> */}
    </Stack>
    </Box>
  );
}