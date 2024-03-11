import React from "react";

const Blog = (props) => {
  console.log(props.blog);
  const { author, image, title, minute, date } = props.blog;

  return (
    <>
      <div className="my-2 mx-8">
        <img className="w-11/12 my-1 rounded-md" src={image} alt="" />

        <div className="flex items-center justify-between p-2 w-11/12">
          <div className="flex gap-2 items-center">
            <img
              className="w-10"
              src="https://cdn-icons-png.flaticon.com/512/2919/2919906.png"
              alt=""
            />
            <div>
              <p>Author: {author}</p>
              <p>Date: {date}</p>
            </div>
          </div>

          <div className="flex gap-2 items-center">
          <p>{minute} minute</p>
          <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
</svg>
</span>
          </div>
         
        </div>

        <div className="w-11/12 p-1 m-1">
             <h1 className="text-3xl font-semibold">{title}</h1>
        </div>
       
      </div>
    </>
  );
};

export default Blog;
