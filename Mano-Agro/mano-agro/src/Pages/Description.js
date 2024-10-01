import React from 'react'
// import StickyFooter from './DownFloater'
import RecipeReviewCard from '../Cards/PdtCard'
import RecipeReviewCard1 from '../Cards/PdtCard1'
import RecipeReviewCard2 from '../Cards/PdtCard2'
import SwipeableTextMobileStepper from '../Pages/SlideShow'
import Mach1 from '../Cards/Machinery/Equip'
import Mach2 from '../Cards/Machinery/Equip1'
import Mach3 from '../Cards/Machinery/Equip2'
// import SquareCorners from './Partners'
import Partners2 from './Partners2'

export const Desc = () => {
  return (
    <div style={{textAlign: 'center'}}>
      <SwipeableTextMobileStepper />
        <h1 style={{color: 'green', fontSize: 40}}>WELCOME TO MANO-AGRO INPUTS ENTERPRISES LIMITED</h1>
        <div id='main'>
          <h3 style={{fontSize: 30, marginLeft: 40, marginRight: 40, color: 'grey'}}>The Mission of Mano-Agro Inputs Enterprises Limited is to <strong>Source high quality inputs and increase agricultural production.</strong></h3>
          <h3 style={{fontSize: 30, color: 'grey'}}>The vision of Mano-Agro Inputs Enterprises Limited is to<strong>Ensure a bountiful harvest from your farm</strong></h3>
          <h4 style={{color: 'green', fontSize: 40}}>More About Mano-Agro...</h4>
          <h4 style={{fontSize: 30, color: 'grey'}}>Our services range from Agricultural Crop Outputs to Mechancal Equipment</h4>
        </div>
        <h1 style={{color: 'green'}}>Our Agricultural Produce</h1>
        <div style={{display: 'inline-flex', padding: 20, backgroundColor: 'grey', width: 1500}}>
        <RecipeReviewCard /> <hr></hr>
        <RecipeReviewCard1 /> <hr></hr>
        <RecipeReviewCard2 /> <br></br>
        </div>
        <h1 style={{color: 'green'}}>Our Equipment</h1>
        <div style={{display: 'inline-flex', padding: 20, backgroundColor: 'grey', width: 1500, marginTop: 20}}>
          <Mach1 /> <hr></hr>
          <Mach2 /> <hr></hr>
          <Mach3 />
        </div> <hr/>
        {/* <div>
          <SquareCorners />
        </div> */}
        <h1 style={{color: 'green'}}>Our Partners</h1>
        <div style={{marginTop: 50, backgroundColor: 'green'}}>
          <Partners2 />
        </div>
        
    </div>
  )
}
