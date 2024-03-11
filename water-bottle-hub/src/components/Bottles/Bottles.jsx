import React, { useEffect, useState } from 'react';
import Bottle from '../Bottle/Bottle';
import './Btottles.css'

const Bottles = () => {

    const [bottle, setBottle] = useState([])

    useEffect( () => {
        fetch('water.json')
        .then(res => res.json())
        .then(data => setBottle(data))
    } ,[])

    // console.log(bottle)
    const [cart, setCart] = useState([]);
    
    const addToCart = bottle => {
        // console.log (bottle)
        const newCart = [...cart, bottle];
        setCart(newCart);
    }


    return (



       <>

       <h3 style={{textAlign:'left'}}>Favorite Items: </h3>
       <div style={{textAlign:'left', marginLeft:'150px'}}>
         {
            cart.map(item => <p>{item.name}</p>)
         }
       </div>
       
       <div className='bottle-parent'>

{
  bottle.map((data => <Bottle data={data} addToCart = {addToCart}></Bottle>))
}

</div>
       
       </>
    );
};

export default Bottles;