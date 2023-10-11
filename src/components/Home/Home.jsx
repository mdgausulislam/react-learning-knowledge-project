import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Blog from '../Blog/Blog';
import './Home.css';
import Bookmarks from '../Bookmarks/Bookmarks';

const Home = () => {
    const blogs = useLoaderData();

    const [bookmarks, setBookmarks] = useState([]);
    const [readingTime, setReadingTime] = useState(0)

    const handleAddToBookmark = blog => {
        const newBookmarks = [...bookmarks, blog];
        setBookmarks(newBookmarks);
    }

    const handleMarkAsRead = (id, time) => {
        const newReadingTime = readingTime + time;
        setReadingTime(newReadingTime);
      
        // const remainingBookmarks = bookmarks.filter(bookmark => bookmark.id !== id);
        // setBookmarks(remainingBookmarks);
    }

    return (
        <div className='blogs-container'>
            <div className='blog-container1'>
                {
                    blogs.map(blog => <Blog
                        key={blog.id}
                        blog={blog}
                        handleAddToBookmark={handleAddToBookmark} 
                        handleMarkAsRead={handleMarkAsRead}
                    ></Blog>)
                }
            </div>
            <div className='bookmark-container'>
                <Bookmarks
                     bookmarks={bookmarks} 
                     readingTime={readingTime}
                ></Bookmarks>
            </div>
        </div>
    );
};

export default Home;