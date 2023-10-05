import React, { useEffect, useState } from 'react';
import './LoadData.css';

const LoadData = () => {

    const[lerner,setLearner]=useState([]);
    useEffect(()=>{
        fetch('learning.json')
        .then(res=>res.json())
        .then(data=>setLearner(data))
    },[])
    return (
        <div className="data-container">
            <div className="learning-container">
                <h1>Hemonto:{lerner.length}</h1>
            </div>
            <div className="blog-container">
                <h1>Hemonto</h1>
            </div>

        </div>
    );
};

export default LoadData;