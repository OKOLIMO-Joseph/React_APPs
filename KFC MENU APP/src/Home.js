import React from 'react'
import RecipeReviewCard from './DishesLib/Dishes';
import RecipeReviewCard1 from './DishesLib/Dishes1';
import RecipeReviewCard2 from './DishesLib/Dishes2';
import RecipeReviewCard3 from './DishesLib/Dishes3';
import RecipeReviewCard4 from './DishesLib/Dishes4';
import RecipeReviewCard5 from './DishesLib/Dishes5';
import StickyFooter from './footer2';
import './HomeStyle.css'

const Home = () => {
  return (
    <div style={{flexWrap: 'wrap', flex: '1'}}>
        {/* <Product toshow={show}/> */}
      <RecipeReviewCard />
      <RecipeReviewCard1 />
      <RecipeReviewCard2 />
      <RecipeReviewCard3 />
      <RecipeReviewCard4 />
      <RecipeReviewCard5 />
      {/* <Footer /> */}
      {/* <Route path='/KFCRestaurants' element={<Restaurants />} /> */}
      <StickyFooter />

    </div>
  )
}

export default Home