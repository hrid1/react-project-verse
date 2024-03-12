import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import Blogs from './components/Blogs/Blogs'
import Bookmark from './components/Bookmark/Bookmark'

function App() {

  const [bookmarks, setBookmark] = useState([]);
  const addBookmark = (blog) => {
    // console.log(blog.id);
    
    const newBlog = [...bookmarks, blog]
    setBookmark(newBlog);
  }
  console.log(bookmarks);

  return (
    <>
    
     <Header></Header>

     <div className='grid md:grid-cols-3  mx-4'>
      <div className=' md:col-span-2'>
      <Blogs addBookmark={addBookmark}></Blogs>
      </div>
      <div className=''>
      <Bookmark bookmarkList={bookmarks}></Bookmark>
      </div>
     </div>
    </>
  )
}

export default App
