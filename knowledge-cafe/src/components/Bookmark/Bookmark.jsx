import React, { useState } from 'react';

const Bookmark = ({bookmarkList}) => {
    // console.log(props.blogList)
    console.log(bookmarkList)
    
   
    const [time , setTime] = useState(0);

     // {   let totalTime = 0;
    //     bookmarkList.forEach(blog => {
    //         // console.log(blog.minute);
    //         totalTime += blog.minute;
    //     });

    //     console.log(totalTime);
    // }
    const timeUpdate = (blogList) => {
        let totalTime = 0;
        blogList.forEach(blog => {
            totalTime+=blog.minute;
        });
        setTime(totalTime);

    }

    return (
        <>
            <div className='w-5/6 p-3 my-2 shadow border text-purple-700 bg-purple-100 rounded-md'>
                <h2 className=' text-xl font-semibold text-center'>Spend Time on read: {time} min </h2>
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