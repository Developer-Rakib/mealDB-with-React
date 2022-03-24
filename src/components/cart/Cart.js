import React from 'react';
import './Cart.css'

const Cart = ({ cartItem }) => {
    console.log(cartItem);
    let { strMealThumb, strMeal, strCategory, strArea } = cartItem;

    return (
        <div className='cart-container'>
            <img src={strMealThumb} alt="" />
            <div className='px-4'>
                <h5 className='mt-2'>{strMeal}</h5>
                <h5 className=''>Price: 230$</h5>
            </div>
            <div className='pe-4'>
                <p className='mb-0 mt-3'>Category: {strCategory}</p>
                <p>Popular in: {strArea}</p>
            </div>


        </div>
    );
};

export default Cart;