import { Avatar, Box, Button, ButtonGroup, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import SettingsIcon from '@mui/icons-material/Settings';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export const Feedbar = () => {
  return (
    <Box sx={{flex: 4, p: 0.5}}>
        <Box>
        <Toolbar sx={{marginTop: '0px', display: {xs: 'none', sm: 'block'}}}>
            <ButtonGroup
      sx={{ border: 'none'}}
      
    >
      <Button sx={{width: 450, height: 80, fontSize: '20px', backgroundColor: 'white', color: 'black'}}>For You</Button>
      <Button sx={{width: 450, height: 80, fontSize: '20px', backgroundColor: 'white', color: 'black'}}>Follow</Button>
    </ButtonGroup>
    <IconButton>
       <SettingsIcon sx={{width: 40, height: 40, backgroundColor: 'white', padding: '20px'}}/>
    </IconButton>
        </Toolbar>
        </Box>

        <Card sx={{width: 1000, height: 780 }}>
      <CardHeader sx={{fontSize: '20px'}}
        avatar={
          <Avatar sx={{ bgcolor: 'red'[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="550"
        image="https://occ-0-2433-2430.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABdNPnFXsC1g0iY4WV01CsEkVlu1OxbmdpRltu-8gXcl1eCJXz5I-nV7_pNydar5I0kWbWS_mR6PlJWxFOLFI-JOH4y7h.jpg?r=e6b"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary" sx={{fontSize: '20px'}}>
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
      <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
      <Checkbox
        {...label}
        icon={<BookmarkBorderIcon />}
        checkedIcon={<BookmarkIcon />}
      />
        </CardActions>
        </Card>

        <Card sx={{width: 1000, height: 780, mt: '10px' }}>
      <CardHeader sx={{fontSize: '20px'}}
        avatar={
          <Avatar sx={{ bgcolor: 'red'[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="550"
        image="https://i.ytimg.com/vi/XB0rsfI3caw/maxresdefault.jpg"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary" sx={{fontSize: '20px'}}>
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        </CardActions>
        </Card>

        <Card sx={{width: 1000, height: 780, mt: '10px' }}>
      <CardHeader sx={{fontSize: '20px'}}
        avatar={
          <Avatar sx={{ bgcolor: 'red'[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="550"
        image="https://cdn7.dissolve.com/p/D869_129_801/D869_129_801_1200.jpg"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary" sx={{fontSize: '20px'}}>
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        </CardActions>
        </Card>

        <Card sx={{width: 1000, height: 780, mt: '10px' }}>
      <CardHeader sx={{fontSize: '20px'}}
        avatar={
          <Avatar sx={{ bgcolor: 'red'[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="550"
        image="https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BB1hIkqk.img?w=768&h=512&m=6"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary" sx={{fontSize: '20px'}}>
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        </CardActions>
        </Card>
        <Card sx={{width: 1000, height: 780, mt: '10px' }}>
      <CardHeader sx={{fontSize: '20px'}}
        avatar={
          <Avatar sx={{ bgcolor: 'red'[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="550"
        image="https://blog.bozemancvb.com/hs-fs/hubfs/CVB_5CoolAnimalz_Blog_Images-01.jpg?width=4370&name=CVB_5CoolAnimalz_Blog_Images-01.jpg"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary" sx={{fontSize: '20px'}}>
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        </CardActions>
        </Card>

        <Card sx={{width: 1000, height: 780, mt: '10px' }}>
      <CardHeader sx={{fontSize: '20px'}}
        avatar={
          <Avatar sx={{ bgcolor: 'red'[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="550"
        image="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEioa_iSm4xlsQI7_bT1Ct13mbQSqHW1Gq1gC_ulPrFC0g0ysUYq4X_S5rNuLcUuU4-CHo7S0vkl6R4FngIvFr6e19m_bDXbr5bMX35SUYFQtMrJ8M3GPjeN2KfZm3xnKhWJfUjQ_SzZFc2UkFeDPyPX4WHiKsSS8mxRKmxBsdpg8z60k3Qqc5Nk4wTQ/s960/Davido%20Timeless.jpg"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary" sx={{fontSize: '20px'}}>
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        </CardActions>
        </Card>

    </Box>
  )
}
