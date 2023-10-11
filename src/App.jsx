import React, { useState } from 'react';
import Header from './components/Header/Header';
import Blogs from './components/Blogs/Blogs';

const App = () => {
  const [bookmarks,setBookmarks]=useState([]);


  const handleAddToBookMark=(blog)=>{
    const newMark=[...bookmarks,blog]
    setBookmarks(newMark)
  }
  return (
    <div>
      <Header></Header>
      <Blogs handleAddToBookMark={handleAddToBookMark}></Blogs>
    </div>
  );
};

export default App;
