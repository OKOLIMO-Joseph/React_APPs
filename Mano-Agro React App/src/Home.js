import React from 'react'
import './Home.css'
// import Header from './Header'
// import StickyFooter from './footer2'

const Hommee = () => {
  return (
    <div>
        {/* <Header /> */}
        
        <div class="wrapper">
      <div class="box">
        <span style={{'--i': 0}}><h1 style={{textAlign: 'center', fontSize: 40}}>ENTERPRISES</h1></span>
        <span style={{'--i': 1}}><h1 style={{textAlign: "center", fontSize: 40}}>INPUTS</h1></span>
        <span style={{'--i': -1}}><h1 style={{textAlign: 'center', fontSize: 40}}>LIMITED</h1></span>
        <span style={{'--i': 2}}><h1 style={{textAlign: 'center', fontSize: 40}}>MANO-AGRO</h1></span>
      </div>
      
    </div>

    </div>
    
  )
}

export default Hommee