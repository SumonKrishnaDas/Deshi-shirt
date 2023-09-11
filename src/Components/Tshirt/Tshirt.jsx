import React from 'react';
import './tshirt.css'

const Tshirt = ({tshirt,handelAddToCart}) => {

const{ picture,name,price}=tshirt;

    return (
        <div className='t-shirt'> 
            
            <img src={picture} alt="" />
            <h4>Name:{name} </h4>
            <p>Price:${price}</p>
            <button onClick={()=> handelAddToCart(tshirt)} >Buy now</button>

        </div>
    );
};

export default Tshirt;