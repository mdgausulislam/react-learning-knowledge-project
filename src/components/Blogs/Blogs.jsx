import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';
import './Blogs.css'

const Blogs = () => {
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
                    ></Blog>)
                }
            </div>
            <div className='bookmark-container'>
                <h1>Md Gousul Islam</h1>
            </div>
        </div>
    );
};

export default Blogs;