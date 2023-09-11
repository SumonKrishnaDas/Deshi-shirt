import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Tshirt from '../Tshirt/Tshirt';
import './Home.css'
import toast from 'react-hot-toast';
import Cart from '../../Cart/Cart';

const Home = () => {

const tshirts = useLoaderData()



const [cart,setcart] =useState([]);

const handelAddToCart = tshirt =>{
    const exists = cart.find(ts  => ts._id === tshirt._id);

    if (exists){

        toast('you have already added this t-shirt ')



    }
else{
    const newCart=[...cart,tshirt]
setcart(newCart);



}

}


const handelRemoveFromCart = id =>{

const remaining = cart.filter( tshirt => tshirt._id !== id);
setcart(remaining)
console.log(id);

}
 

    return (
        <div className='home-container' >
      
      
      <div className='t-shirt-container'>


        

      {


tshirts.map(tshirt => <Tshirt  key={tshirt._id}  tshirt={tshirt} handelAddToCart={handelAddToCart} > </Tshirt>)
            }
            
      </div>
<div className='cart-container'  >


<h2>order summary</h2>
<Cart  cart={cart} handelRemoveFromCart={handelRemoveFromCart} >  </Cart>

</div>

        </div>
    );
};

export default Home;