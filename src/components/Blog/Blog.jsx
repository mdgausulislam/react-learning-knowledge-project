import React from 'react';
import './Blog.css';
import { BeakerIcon, BookmarkSlashIcon } from '@heroicons/react/24/solid'


const Blog = ({ blog, handleAddToBookmark, handleMarkAsRead }) => {
    const { id, coder, date, img, name, reading, text, profile } = blog;
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
                        <p className='bookmark-read'>{reading} min read</p>
                    </div>
                    <div>

                        <button  onClick={() => handleAddToBookmark(blog)}>
                            Click BookMark
                        </button>

                    </div>

                </div>
            </div>

            <h2 className='title-text'>{text}</h2>
            <p>

                {
                    coder.map((hash, idx) => <span key={idx}> {hash}</span>)
                }
            </p>

            <button onClick={() => handleMarkAsRead(id, reading)}>
                {/* <span> <BookmarkSlashIcon className='icon-bookmark' /> </span> */}
                Mark Add Read
            </button>



        </div>
    );
};

export default Blog;