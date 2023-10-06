import React from 'react';
import './Time.css'

const Time = (props) => {
    const {data}=props;
    let totalSpent=0;
    let reading=0;
    for (const time of data) {

        totalSpent = totalSpent + time.reading;
        
    }

    return (
        <div className="data-analysis">
           <h5 className="spent-time">Spent time on read : {totalSpent} min</h5>
        </div>
    );
};

export default Time;