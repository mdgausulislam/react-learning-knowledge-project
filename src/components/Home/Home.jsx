import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Blog from '../Blog/Blog';
import './Home.css';
import Bookmarks from '../Bookmarks/Bookmarks';

const Home = () => {
    const blogs = useLoaderData();
    const [newBlog, setBlog] = useState([]);
    const [bookmark, setBookmark] = useState([]);



    const handleAddToRead = blog => {
        const newCart = [...newBlog, blog]
        setBlog(newCart);
    }



    const handleAddTOBookmark = reading => {
        const newBookmark = [...bookmark, reading];
        setBookmark(newBookmark);
    }

    return (
        <div className='blogs-container'>
            <div className='blog-container1'>
                {
                    blogs.map(blog => <Blog
                        key={blog.id}
                        blog={blog}
                        handleAddToRead={handleAddToRead}
                        handleAddTOBookmark={handleAddTOBookmark}
                    ></Blog>)
                }
            </div>
            <div className='bookmark-container'>
                <Bookmarks
                    newBlog={newBlog}
                    bookmark={bookmark}
                >
                </Bookmarks>
            </div>
        </div>
    );
};

export default Home;