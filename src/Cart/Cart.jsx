import React from 'react';




const Cart = ({cart,handelRemoveFromCart}) => {


    let meseage;
     if(cart.length ===0 ){

        meseage = <p>Please add some product </p>

     }




    return (
        <div>
{meseage}

            {

cart.map(tshirt => <p key={tshirt.name}>
     {tshirt.name}
      <button onClick = { () => handelRemoveFromCart(tshirt._id)}>X</button> </p>)


            }


</div>
    );
};

export default Cart;