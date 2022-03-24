import React from 'react';
import './Meal.css';
import { BsFillCartPlusFill } from 'react-icons/bs';

const Meal = ({ mealData, cartHandle }) => {
    let { strMealThumb, strMeal, strInstructions, strCategory } = mealData;
    return (
        <div className='meal-container'>
            <img src={strMealThumb} alt="" />
            <div className='p-2'>
                <h5>{strMeal}</h5>
                <div style={{ fontSize: "13px" }}>
                    <p>caragory: {strCategory}</p>
                </div>
                <p style={{ marginBottom: "33px" }}>{strInstructions.slice(0, 120)}</p>
                <button onClick={() => cartHandle(mealData)} className='cart-btn'> <BsFillCartPlusFill /></button>
            </div>
        </div>
    );
};

export default Meal;