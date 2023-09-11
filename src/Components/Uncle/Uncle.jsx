import React from 'react';
import Cousin from '../Cousin/Cousin';
import './Uncle.css'

const Uncle = () => {
    return (
        <div>
            <h2>Uncle</h2>

            <section className='flex'>

<Cousin>Krishna  </Cousin>
<Cousin>Subadra</Cousin>

            </section>
            
        </div>
    );
};

export default Uncle;