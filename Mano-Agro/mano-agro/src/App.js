
// import About from './About';
// import './App.css';
// import Hommee from './Home';
// import { Switch } from '@mui/material';
import Header from './Header';
import { Desc } from './Pages/Description';
// import SwipeableTextMobileStepper from './Pages/SlideShow';
import Products from './Slider';
// import HomPage from './HomePage';
// import ImageList from './Slider';
import { Routes, Route } from 'react-router-dom';

// import PersistentDrawerLeft from "./Pages/FirstPage";

function App() {
  return (
    <div className="App">
      <Header/>
      {/* <Desc /> */}
      {/* <BrowserRouter> */}
      <Routes>
        {/* <Switch> */}
                 {/* <PersistentDrawerLeft /> */}
      {/* <Hommee /> */}
      <Route path='/' element={<Desc />} />
      {/* <Products /> */}
      {/* <SwipeableTextMobileStepper />
      <Desc /> */}
      {/* <HomPage /> */}
      <Route path='/home' element={<Products />} />
      {/* <About /> */}
        {/* </Switch> */}
     </Routes>
      {/* </BrowserRouter> */}
    </div>
  );
}

export default App;
