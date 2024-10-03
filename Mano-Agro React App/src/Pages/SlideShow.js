import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: 'Explore Green Pepper growing with Mano-Agro',
    imgPath:
      'https://happydiyhome.com/wp-content/uploads/2020/04/4-Green-Pepper-Plant.jpg',
  },
  {
    label: 'Explore Red Pepper growing with Mano-Agro',
    imgPath:
      'https://i.pinimg.com/originals/87/f0/1b/87f01ba651d0790c73bbfb360c6b50c5.png',
  },
  {
    label: 'Explore Coffee growing with Mano-Agro',
    imgPath:
      'https://keepfitkingdom.com/wp-content/uploads/2019/04/Top-5-Health-Benefits-of-Coffee-Fruit-Extract-Keep-Fit-Kingdom-842x472.jpg',
  },
  {
    label: 'Explore Tomato growing with Mano-Agro',
    imgPath:
      'https://harpersnurseries.com/wp-content/uploads/2023/04/Tomato-Crops.jpg',
  },
  {
    label: 'Explore Cabbage growing with Mano-Agro',
    imgPath:
      'https://th.bing.com/th/id/OIP.N2ChDNmzo7n5oqC37GIR5wEyDM?w=800&h=533&rs=1&pid=ImgDetMain',
  },
];

function SwipeableTextMobileStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ maxWidth: 1400, flexGrow: 1 , marginLeft: 10}}>
      <Paper
        square
        elevation={0}
        sx={{
          display: 'flex',
          alignItems: 'center',
          height: 50,
          pl: 2,
          bgcolor: 'background.default',
        }}
      >
        <Typography>{images[activeStep].label}</Typography>
      </Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  height: 500,
                  display: 'block',
                  maxWidth: 1000,
                  overflow: 'hidden',
                  width: '100%',
                  marginLeft: 25,
                  marginTop: 10,
                }}
                src={step.imgPath}
                alt={step.label}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </Box>
  );
  
}

export default SwipeableTextMobileStepper;