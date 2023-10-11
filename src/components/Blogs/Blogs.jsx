import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';
import './Blogs.css'
import Bookmarks from '../Bookmarks/Bookmarks';

const Blogs = ({handleAddToBookMark, handleMarkAsRead}) => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        const loadData = async () => {
            const res = await fetch('learning.json');
            const data = await res.json();
            console.log(data);
            setBlogs(data);
        }
        loadData();
    }, [])
    return (
        <div className='blogs-container'>
            <div className='blog-container1'>
                {
                    blogs.map(blog => <Blog
                        key={blog.id}
                        blog={blog}
                        handleAddToBookMark={handleAddToBookMark}
                        handleMarkAsRead={handleMarkAsRead}
                    ></Blog>)
                }
            </div>
            <div className='bookmark-container'>
              <Bookmarks></Bookmarks>
            </div>
        </div>
    );
};

export default Blogs;