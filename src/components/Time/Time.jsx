import React from 'react';
import './Time.css'

const Time = (props) => {
    const { data } = props;
    const {blog}=props;

    let totalSpent = 0;
    let totalBookmarks = 0;

    for (const time of data) {
        totalSpent = totalSpent + time.reading;
    }

    for (const blogItem of blog) {
            totalBookmarks = totalBookmarks + 1;
    }

    return (
        <div className="data-analysis">
            <h5 className="spent-time">Spent time on read : {totalSpent} min</h5>
            <h4 className="bookmark-blog">Bookmarked Blogs : {totalBookmarks}</h4>
        </div>
    );
};
export default Time;