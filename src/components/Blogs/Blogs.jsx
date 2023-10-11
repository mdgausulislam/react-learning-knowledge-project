import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';

const Blogs = () => {
    const [blogs,setBlogs]=useState([]);
    useEffect(()=>{
        const loadData=async()=>{
            const res=await fetch('learning.json');
            const data=await res.json();
            console.log(data);
            setBlogs(data);
        }
        loadData();
    },[])
    return (
        <div>
            <h1>Total elements:{blogs.length}</h1>
            {
                blogs.map(blog=><Blog
                key={blog.id}
                blog={blog}
                ></Blog>)
            }
        </div>
    );
};

export default Blogs;