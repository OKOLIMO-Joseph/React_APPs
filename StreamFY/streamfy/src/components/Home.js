import React from 'react'
import { Sidebar } from './Sidebar'
import { Box, Stack } from '@mui/material'
import { Navbar } from './Navbar'
import Kasozi from "./Videos/Kasozi.mp4"

export const Home = () => {
  return (
    <div>
        <Navbar/>
      <Sidebar/>
      <Box sx={{ width: 200 }}>
      <Stack spacing={{ xs: 1, sm: 2 }} direction="row" useFlexGap flexWrap="wrap">
        <video src={Kasozi} autoPlay='true' />
      </Stack>
    </Box>
    </div>
  )
}
