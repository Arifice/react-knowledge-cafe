import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import BookMarks from './Components/BookMarks/BookMarks'
import Header from './Components/Header/Header'

function App() {
    const [bookmarks,setBookMarks]=useState([]);
    const [readTime,setReadTime]=useState(0);


    const handleAddToBookMarks=blog=>{
        
        const newBookmarks=[...bookmarks,blog];
        setBookMarks(newBookmarks);

    }
    const handleMarkRead=(time,id)=>{
        
       const newtime=readTime+time;
       setReadTime(newtime);
       console.log(newtime);
    //    remove the read blog
    const remaingBookmarks=bookmarks.filter(bookmark=>bookmark.id!==id);
    setBookMarks(remaingBookmarks);
    }
  

  return (
    <>
      
      <Header></Header>
      <div className='md:flex max-w-7xl mx-auto'>
        <Blogs handleAddToBookMarks={handleAddToBookMarks} 
        handleMarkRead={handleMarkRead}></Blogs>
        <BookMarks bookmarks={bookmarks} readTime={readTime}></BookMarks>
      </div>
     
    </>
  )
}

export default App
