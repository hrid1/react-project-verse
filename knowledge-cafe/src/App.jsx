import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import Blogs from './components/Blogs/Blogs'
import Bookmark from './components/Bookmark/Bookmark'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
     <Header></Header>

     <div className='grid md:grid-cols-3  mx-4'>
      <div className=' md:col-span-2'>
      <Blogs></Blogs>
      </div>
      <div className=''>is
      <Bookmark></Bookmark>
      </div>
     </div>
    </>
  )
}

export default App
