import React from 'react';




const Cart = ({cart,handelRemoveFromCart}) => {


    let meseage;
     if(cart.length ===0 ){

        meseage = <p>Please add some product </p>

     }
else{
    meseage = <p> Thanks for order</p>
}



    return (
        <div>
{/* {meseage} */}

{/* {cart.length > 2? <span> Aro kin re vai</span>:<span> ba beta boroluk</span>} */}
{

    // cart.length== 2 && <p>Double kinla </p>
}

{

    cart.length ===3 || <h6> 3 ta hoice na</h6>
}



            {

cart.map(tshirt => <p key={tshirt.name}>
     {tshirt.name}
      <button onClick = { () => handelRemoveFromCart(tshirt._id)}>X</button> </p>)


            }


</div>
    );
};

export default Cart;