import React from 'react';
import './Time.css'

const Time = (props) => {
    const {time}=props;
    return (
        <div className="data-analysis">
           <h5 className="spent-time">Spent time on read : 177 min</h5>
        </div>
    );
};

export default Time;