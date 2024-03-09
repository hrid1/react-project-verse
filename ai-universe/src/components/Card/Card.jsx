/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import SingleData from "../singleData/SingleData";
import Button from "../Button/Button";

const Card = () => {
  const [datas, setdata] = useState([]);
  const [showAll, setshowAll] = useState(false);
  const [btnText, setbtnText] = useState("Show All..........");

  useEffect(() => {
    fetch("https://openapi.programming-hero.com/api/ai/tools")
      .then((res) => res.json())
      .then((datas) => setdata(datas.data.tools));
  }, []);

  //    console.log(datas)

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-3 lg:px-12 md-mx-5 gap-5 m-5 rounded-3xl">

    
        {datas.slice(0,showAll ? 12 : 5).map((data) => (
          <SingleData key={data.id} data={data}></SingleData>
        ))}
      </div>

     {
         !showAll && (
            <span className="" onClick={() => {setshowAll(true)}  }>
          <Button className="inline-block">Show More</Button>
          </span>
          )
     }

{/* show leess */}

     {
        showAll && (
           <span className="inline" onClick={ ()=> {setshowAll(false)}}>
             <Button>See Less</Button>
           </span>
           
        )

     }
      
    </>
  );
};

export default Card;
