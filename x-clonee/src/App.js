import { Box, Stack } from "@mui/material";
import Leftbar from "./components/Leftbar";
import { Feedbar } from "./components/Feedbar";
import { Rightbar } from "./components/Rightbar";
import { Navbar } from "./components/Navbar";


function App() {
  return (
    <Box>
      <Stack direction='row' spacing={2} justifyContent='space-between'>
        <Navbar/>
        <Leftbar/>
        <Feedbar/>
        <Rightbar/>
      </Stack>
    </Box>
  );
}

export default App;
