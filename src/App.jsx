import React, { useState } from 'react';
import Header from './components/Header/Header';
import Blogs from './components/Blogs/Blogs';
import Bookmarks from './components/Bookmarks/Bookmarks';

const App = () => {
  const [bookmarks, setBookmarks] = useState([]);
  // const [readingTime, setReadingTime] = useState(0)


  const handleAddToBookMark = (blog) => {
    const newMark = [...bookmarks, blog]
    setBookmarks(newMark)
  }
  // const handleMarkAsRead = (id, time) => {
  //   const newReadingTime = readingTime + time;
  //   setReadingTime(newReadingTime);
  //   const remainingBookmarks = bookmarks.filter(bookmark => bookmark.id !== id);
  //   setBookmarks(remainingBookmarks);
  // }

  return (
    <div>
      <Header></Header>
      <Blogs handleAddToBookMark={handleAddToBookMark}
        // handleMarkAsRead={handleMarkAsRead}
        ></Blogs>
      {/* <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks> */}
    </div>
  );
};

export default App;
