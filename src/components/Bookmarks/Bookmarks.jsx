import React from 'react';

const Bookmarks = ({ newBlog,bookmark }) => {

    const totalTime = 0;
    for(const time of bookmark){
        totalTime=totalTime+time.reading;
    }
    return (
        <div>
            <h1>TotalTime:{totalTime}</h1>
            <h1>Order Summary:{newBlog.length}</h1>
            {
                newBlog.map(blog => <p key={blog.id}>{blog.text}</p>)
            }
        </div>
    );
};

export default Bookmarks;