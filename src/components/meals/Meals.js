import React, { useEffect, useState } from 'react';
import Meal from '../meal/Meal';
import './Meals.css';

const Meals = ({ cartHandle }) => {
    let [meals, setMeals] = useState([])
    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?s')
            .then(res => res.json())
            .then(data => setMeals(data.meals))
    }, [])
    return (
        <div className='meals-container'>
            {
                meals.map(meal => <Meal
                    key={meal.idMeal}
                    mealData={meal}
                    cartHandle={cartHandle}
                ></Meal>)
            }
        </div>
    );
};

export default Meals;