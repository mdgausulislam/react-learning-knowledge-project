import React from 'react';
import './Blog.css';

const Blog = ({blog}) => {
    const {coder,date,icon,img,name,reading,text}=blog;
    return (
        <div className='blog-container'>
           <img src={img} alt="" />
        </div>
    );
};

export default Blog;