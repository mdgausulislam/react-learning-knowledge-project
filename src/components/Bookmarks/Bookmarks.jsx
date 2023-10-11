import React from 'react';

const Bookmarks = ({bookmarks, readingTime}) => {

    return (
        <div>
            <h1>TotalTime:{readingTime} min</h1>
            <h1>Order Summary:{bookmarks.length}</h1>
            {
                bookmarks.map(blog => <p key={blog.id}>{blog.text}</p>)
            }
        </div>
    );
};

export default Bookmarks;