import React from 'react';
import './Data.css';

const Data = (props) => {
    const { img, profile, name, date, reading, icon, coder, coder1,text} = props.lerner1;
    return (
        <div className="data">
            <img className="image-caption" src={img} alt="" />
            <div className="profile-info">
                <div className="profile-details">
                    <img className="profile-caption" src={profile} alt="" />
                    <div>
                        <h5 className="profile-name">{name}</h5>
                        <p className="date-name">{date}</p>
                    </div>

                </div>

                <div className="reading">
                    <p className="read">{reading}</p>
                    <img className="icon-read" src={icon} alt="" />
                </div>
            </div>

            <h1 className="text-name">{text}</h1>

            <p>{coder}</p>
            <p>{coder1}</p>
            <a className="mark" href="/mark">Mark as read</a>
            <br/>
        </div>
    );
};

export default Data;