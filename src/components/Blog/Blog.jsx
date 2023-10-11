import React from 'react';
import './Blog.css';
import { BeakerIcon, BookmarkSlashIcon } from '@heroicons/react/24/solid'


const Blog = ({ blog }) => {
    const { id, coder, date, icon, img, name, reading, text, profile } = blog;
    return (
        <div className='blog-container'>
            <img className='image-cover' src={img} alt="" />
            <div className='profile-info'>
                <div className='profile-details'>
                    <img className='image-profile' src={profile} alt="" />
                    <div>
                        <h2 className='title'>{name}</h2>
                        <p className='date'>{date}</p>
                    </div>
                </div>
                <div className='details-read'>
                    <div>
                        <p className='bookmark-read'>{reading}min read</p>
                    </div>
                    <div>
                        <span> <BookmarkSlashIcon className='icon-bookmark' /> </span>
                    </div>

                </div>
            </div>

            <h2 className='title-text'>{text}</h2>
            <p>{coder}</p>

            <a className='mark-as-read' href="">Mark as read</a>

        </div>
    );
};

export default Blog;