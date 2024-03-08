/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import SingleData from '../singleData/SingleData';

const Card = () => {

    const [datas, setdata] = useState([]);
    useEffect( () => {
        fetch('https://openapi.programming-hero.com/api/ai/tools')
        .then(res => res.json())
        .then(datas => setdata(datas.data.tools))
   }, [])

//    console.log(datas)

    return (
       <div className='grid grid-cols-3 gap-5 m-5'>
      
       {/* {
        datas.map( data => <singleData key={data.id} name={data.name}> </singleData>)
       } */}

       {
        datas.map(data => <SingleData key={data.id} data={data}></SingleData>)
       }
       

       </div>
    );
};

export default Card;