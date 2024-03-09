import React from "react";

const SingleData = (props) => {
  const { name,features, description, published_in, image } = props.data;

  return (
    <>
      <div className=" w-full shadow-orange-50 shadow-lg p-2 rounded m-5">
        <img className="p-2 rounded-2xl" src={image} alt="img-not-found" />
        <h2 className="font-bold text-xl mt-3">Features</h2>
        <ul className="list-decimal mx-9">
            {/* <li>{features[0]}</li>
            <li>{features[1]}</li>
            <li>{features[2]}</li> */}

            {
              features.map((feature, index)=> <p>{index+1}.{feature}</p>)
            }
        </ul>

        <hr className="my-3 border-gray-400 "/>

        <h1 className="font-bold text-2xl my-3">{name}</h1>

       <div className="flex items-center justify-between ">
       <div className="flex items-center gap-2">
          <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
</svg>
</span>  <h1 className="my-2">Date: {published_in}</h1>
        </div>

        <div className="cursor-pointer p-1 border border-gray-800 rounded-lg ">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
</svg>

        </div>
       </div>

        
        
        
      </div>
    </>
  );
};

export default SingleData;
