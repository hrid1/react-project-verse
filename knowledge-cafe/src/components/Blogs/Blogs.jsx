import React, { useState } from 'react';
import Blog from '../Blog/Blog';

const Blogs = ({addBookmark}) => {

    // console.log(addBookmark)

    const [blogs, setBlogs] = useState([]);
    useState( () => {
        fetch('blog.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    } ,[])


    return (
        <div>

            {
                // blogs.map(blog => <p>this</p>)
                blogs.map(blog => <Blog 
                    blog = {blog}
                    key = {blog.id}
                    addBookmark = {addBookmark}
                    > </Blog>)
            }
            
            
        </div>
    );
};

export default Blogs;