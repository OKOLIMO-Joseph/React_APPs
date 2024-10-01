import styled from '@emotion/styled'
import { AppBar, Avatar, Box, Toolbar } from '@mui/material'
import React from 'react'
import XIcon from '@mui/icons-material/X';
import SettingsIcon from '@mui/icons-material/Settings';

const StyleToolbar = styled(Toolbar)({
    display: 'flex',
    justifyContent: 'space-between'
});

export const Navbar = () => {
  return (
    <Box >
        <AppBar sx={{backgroundColor: 'black', display: {xs: 'block', sm: 'none'}}}>
          <StyleToolbar>
          <Avatar alt="Remy Sharp" src="https://th.bing.com/th/id/R.3522b1d494aa72a43b4876e86d32c62b?rik=glydNQcNfMEI%2bw&pid=ImgRaw&r=0" />
          <XIcon color='white'/>
          <SettingsIcon/>
          </StyleToolbar>
        </AppBar>
    </Box>
  )
}
