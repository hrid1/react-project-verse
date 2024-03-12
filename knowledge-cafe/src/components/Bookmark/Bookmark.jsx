import React, { useState } from 'react';

const Bookmark = (props) => {
    // console.log(props.blogList)

    const {bookmarkList, time} = props;
    
   
    return (
        <>
            <div className='w-5/6 p-3 my-2 shadow border text-purple-700 bg-purple-100 rounded-md sm:mx-auto'>
                <h2 className=' text-xl font-semibold text-center'>Spend Time on read: {time} </h2>
            </div>

            <div>

                <h1 className='text-2xl font-bold my-5'>Bookmark List: {bookmarkList.length}</h1>

              {
                bookmarkList.map(bookmark => {
                    
                    return(
                        <div className='border bg-slate-200 shadow-sm p-2 font-bold text-lg w-5/6 rounded-sm my-2'>

                           {bookmark.title}
                            
                        </div>
                    )
                })
              }
              
                

            </div>
        
        
        </>
    );
};

export default Bookmark;