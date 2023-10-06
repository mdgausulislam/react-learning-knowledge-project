import React from 'react';
import './Data.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark} from '@fortawesome/free-solid-svg-icons'

const Data = (props) => {
    const { img, profile, name, date, reading, coder, coder1, text } = props.learn1;
    const handleToAdd=props.handleToAdd;
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
                    <p className="read">{reading}  <FontAwesomeIcon icon={faBookmark} /></p>
            </div>
            <div className="info-details">
                <h1 className="text-name">{text}</h1>
                <div className="coder">
                    <p>{coder}</p>
                    <p>{coder1}</p>
                </div>
                <a className="mark" onClick={()=>handleToAdd()} href="/mark">Mark as read</a>
            </div>


            <br />
        </div>
    );
};

export default Data;