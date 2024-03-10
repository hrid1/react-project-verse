/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import SingleData from "../singleData/SingleData";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";

const Card = () => {
  const [datas, setdata] = useState([]);
  const [showAll, setshowAll] = useState(false);
  const [uniqueId, setUniqueId] = useState(null);
  const [singleData, setSingleData] = useState({});

  // console.log(uniqueId);

  useEffect( () => {
    fetch(`https://openapi.programming-hero.com/api/ai/tool/${uniqueId}`)
    .then(res => res.json())
    .then(data => setSingleData(data.data));
  } ,[uniqueId])


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
          <SingleData key={data.id} data={data} setUniqueId={setUniqueId}></SingleData>
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

     <Modal data ={singleData}></Modal>
    </>
  );
};

export default Card;
