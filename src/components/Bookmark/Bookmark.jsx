import React from 'react';

const Bookmark = ({bookmark}) => {
    const {text}=bookmark;
    return (
        <div>
            <h1>{text}</h1>
        </div>
    );
};

export default Bookmark;