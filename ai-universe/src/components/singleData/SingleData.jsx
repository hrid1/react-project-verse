import React from "react";

const SingleData = (props) => {
  const { name,features, description, published_in, image } = props.data;

  return (
    <>
      <div className=" bg-slate-800 p-2 rounded m-2">
        <img className="p-2" src={image} alt="img-not-found" />
        <h2 className="font-bold text-xl my-3">Features</h2>
        <ul className="list-decimal mx-9">
            <li>{features[0]}</li>
            <li>{features[1]}</li>
            <li>{features[2]}</li>
        </ul>

        <hr className="my-3 border-gray-400 "/>

        <h1 className="font-bold text-xl my-3">{name}</h1>
        <h1 className="my-2">Date: {published_in}</h1>
      </div>
    </>
  );
};

export default SingleData;
