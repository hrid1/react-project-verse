import { useEffect, useState } from 'react'
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
  // console.log(bookmarks);

  const [time, setTime] = useState(0);

  const updateTime = n => {
        setTime(time+n)
        // console.log(`i got ${n} and newtime=${newtime}`)
  }

  return (
    <>
    
     <Header></Header>

     <div className='grid md:grid-cols-3  mx-4'>
      <div className=' md:col-span-2'>
      <Blogs addBookmark={addBookmark} updateTime={updateTime}></Blogs>
      </div>
      <div className=''>
      <Bookmark bookmarkList={bookmarks} time={time}></Bookmark>
      </div>
     </div>
    </>
  )
}

export default App
