import React from 'react';
import './Card.css';

export default function Card({imageUrl, description, user}) {
    return (
        <div className="card-container">
            <img src={imageUrl} alt="" className="card-image"/>
            <div className="card-text">
                <h3>{description}</h3>
                <p>{user}</p>
            </div>
        </div>
    )
}
