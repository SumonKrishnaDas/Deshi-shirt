import React from 'react';
import Cousin from '../Cousin/Cousin';
import './Aunty.css'

const Aunty = () => {
    return (
        <div>
            <h2>Aunty</h2>

            <section className='flex'>
<Cousin>Sumon</Cousin>
<Cousin  hasFriend={true} >Sumona </Cousin>
            </section>
        </div>
    );
};

export default Aunty;