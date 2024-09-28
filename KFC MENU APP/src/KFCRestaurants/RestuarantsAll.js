import React from 'react'
import Restau1 from './Restau1'
import Restau2 from './Restau2'
import Restau3 from './Restau3'
import Restau4 from './Restau4'
import Restau5 from './Restau5'
import Restau6 from './Restau6'
import StickyFooter from '../footer2'

const RestuarantsAll = () => {
  return (
    <div style={{ flexWrap: 'wrap', flex: '1', display: 'flex', margin: '20px'}}>
        <Restau1 />
        <Restau2 />
        <Restau3 />
        <Restau4 />
        <Restau5 />
        <Restau6 />
        
        <StickyFooter />

    </div>
  )
}

export default RestuarantsAll