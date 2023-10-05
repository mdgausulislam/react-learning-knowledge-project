import React, { useEffect, useState } from 'react';
import './LoadData.css';
import Data from '../Data/Data';

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
                {
                    lerner.map(lerner1=><Data
                    key={lerner1.id}
                    lerner1={lerner1}
                    ></Data>)
                }
            </div>
            <div className="blog-container">
                <h1>Hemonto</h1>
            </div>

        </div>
    );
};

export default LoadData;