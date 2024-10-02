import React from "react";
import { useState } from "react";
const RecipeCard = ({ recipe }) => {
    const [price, setPrice] = useState(0);
    const {
        idMeal,
        strMeal,
        strCategory,
        strMealThumb,
    } = recipe;
    
    return (
        <div className="card">
            <img
                src={strMealThumb}
                alt={strMeal}
                className="card-image"
            />
            <div className="card-body">
                <span className="category">{strCategory}</span>
                <h3>{strMeal}</h3>
                <a href={"https://www.themealdb.com/meal/" + idMeal} target="_blank">Instructions</a>
                <h4>{price}</h4>
                <button style={{backgroundColor: "orange", padding: 10, border: 0}} onClick={() =>{
                    setPrice(price +1);
                    if(price > 20){
                        alert("This is the maximum order you can make!")
                        document.querySelector('button').disabled = true;
                    }
                }}>Quantity</button>
                
            </div>
        </div>
    )
};

export default RecipeCard;
