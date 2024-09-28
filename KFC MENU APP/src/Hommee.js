import React from 'react'
import './HomeStyle.css'
// import StickyFooter from './footer2'

const Hommee = () => {
  return (
    <div>
        
        <div class="wrapper">
      <div class="box">
        <span style={{'--i': 0}}><h1 style={{textAlign: 'center', fontSize: 70}}>Fried</h1></span>
        <span style={{'--i': 1}}><h1 style={{textAlign: "center", fontSize: 45}}>Kentucky</h1></span>
        <span style={{'--i': -1}}><h1 style={{textAlign: 'center', fontSize: 45}}>Chicken</h1></span>
        <span style={{'--i': 2}}><h1 style={{textAlign: 'center', fontSize: 70}}>KFC </h1></span>
      </div>
    </div>
    {/* <StickyFooter /> */}
    </div>
    
  )
}

export default Hommee