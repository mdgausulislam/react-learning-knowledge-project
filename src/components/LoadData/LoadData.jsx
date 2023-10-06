import React, { useEffect, useState } from 'react';
import './LoadData.css';
import Data from '../Data/Data';
import Time from '../Time/Time';

const LoadData = () => {

    const [learner, setLearner] = useState([]);
    const [data, setData] = useState([]);
    const [blog, setBlog] = useState([]);
    useEffect(() => {
        fetch('learning.json')
            .then(res => res.json())
            .then(dat => setLearner(dat))
    }, []);

    const handleToAdd = (learn1) => {
        const newLearn = [...data, learn1];
        setData(newLearn);
    }

    const handleToAddBookmark = (learn) => {
        const newBlog = [...blog, learn];
        setBlog(newBlog);
    }

    return (
        <div className="data-container">
            <div className="learning-container">
                {
                    learner.map(learn1 => <Data
                        key={learn1.id}
                        learn1={learn1}
                        handleToAdd={handleToAdd}
                    handleToAddBookmark={handleToAddBookmark}
                    ></Data>)
                }
            </div>
            <div className="blog-container">
                <Time
                    data={data}
                    blog={blog}
                ></Time>
            </div>

        </div>
    );
};

export default LoadData;