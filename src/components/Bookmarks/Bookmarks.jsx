import React from 'react';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({blogs}) => {
    return (
        <div>
            <h2>Spent time on read : {blogs.length}</h2>
            {
                blogs.map(bookmark=><Bookmark
                key={bookmark.id}
                bookmark={bookmark}
                ></Bookmark>)
            }
        </div>
    );
};

export default Bookmarks;