import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Tshirt from '../Tshirt/Tshirt';
import './Home.css'

const Home = () => {

const tshirts = useLoaderData()



const [cart,setcart] =useState([]);

const handelAddToCart = tshirt=>{

const newCart=[...cart,tshirt]
setcart(newCart);

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

</div>

        </div>
    );
};

export default Home;