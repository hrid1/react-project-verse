import React from 'react';
import './Bottle.css'

const Bottle = (props) => {
    
    // console.log(props.data)
    const {name, price, img} = props.data;
    const {addToCart} = props;

    
  
    return (
        <>
        <div className='bottle-container'>
          <h2>{name}</h2>
          <img src={img} alt="img not found" />
          <h2>Price: ${price}</h2>
          <button style={{padding:"10px"}} onClick={() => {addToCart(props.data)}}>Add To Cart</button>
        </div>
        </>
    );
};

export default Bottle;