import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { Button, Link } from '@mui/material';
// import SwipeableTextMobileStepper from './Pages/SlideShow';
// import { Desc } from './Pages/Description';
import StickyFooter from './Pages/DownFloater';
// import AgricultureIcon from '@mui/icons-material/Agriculture';

// const pages = ['Our Equipment', 'Our Agro-Outputs', 'More'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" style={{backgroundColor: 'white', height: 120}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
        <Avatar style={{width: 80, height: 80, marginTop: 5}} alt="Remy Sharp" src="https://www.bing.com/images/blob?bcid=RGrsSfY-AmcGZqJexTgVwhGC.AzQ.....7U" />
          {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
          
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.1rem',
              color: 'green',
              textDecoration: 'none',
              fontSize: 60,
              marginLeft: 5,
              marginTop: 3,
            }}
          >
            MANO-AGRO INPUTS ENTERPRISES LIMITED
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {/* {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))} */}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'green',
              textDecoration: 'none',
            }}
          >
            Our Equipment
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {/* {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                <AgricultureIcon />
                {page}
              </Button>
            ))} */
            }
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
        {/* <div style={{padding: 35}}>
        <Button variant='contained' style={{backgroundColor: 'green', width: 150}}>Home</Button>
        <Button variant='contained' style={{backgroundColor: 'green', width: 150}}>Agric Inputs</Button>
        <Button variant='contained' style={{backgroundColor: 'green', width: 170}}>Our Products</Button>
        <Button variant='contained' style={{backgroundColor: 'green', width: 150}}>About Us</Button>
        <Button variant='contained' style={{backgroundColor: 'green', width: 150}}>Contact Us</Button>
        </div> */}
        {/* <ButtonGroup variant="contained" aria-label="outlined primary button group" style={{padding: 0, marginLeft: 915, width: 650, marginTop: 15, backgroundColor: 'white'}}> */}
         <div style={{padding: 0, marginLeft: 915, width: 650, marginTop: 15, backgroundColor: 'white'}}>
         <nav>
         <Link to='home'>
        <Button variant="contained" style={{padding: 2, fontSize: 20, width: 150, margin: 20, color: 'green', backgroundColor: 'white'}}>Home</Button>
        </Link>
        <Link to='about'>
        <Button variant="contained" style={{padding: 2, fontSize: 20, width: 180, margin: 20, color: 'green', backgroundColor: 'white'}}>About Us</Button>
        </Link>
        <Link to='contact'>
        <Button variant="contained" style={{padding: 2, fontSize: 20, width: 180, margin: 20, color: 'green', backgroundColor: 'white'}}>Contact US</Button>
        </Link>
         </nav>
        {/* </ButtonGroup>*/}</div> 
        {/* <SwipeableTextMobileStepper /> */}
        {/* <Desc /> */}
        <div style={{marginTop: 4250, backgroundSize: 200}}>
        <StickyFooter />
        </div>
      </Container>
    </AppBar>
    
  );
}
export default Header;