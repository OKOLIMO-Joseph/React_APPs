import React from 'react'
import R1 from './KFCRestaurants/Restau1'
import R2 from './KFCRestaurants/Restau2'
import R3 from './KFCRestaurants/Restau3'
import R4 from './KFCRestaurants/Restau4'
import R5 from './KFCRestaurants/Restau5'
import Header from './header'
import R6 from './KFCRestaurants/Restau6'

export const KFCBranches = () => {
  return (
    <div>
        <Header />
        <R1 />
        <R2 />
        <R3 />
        <R4 />
        <R5 />
        <R6 />
    </div>
  )
}
