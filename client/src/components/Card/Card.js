import React from 'react';
import './Card.css';

export default function Card({name, url, description, user}) {
    return (
        <div className="card-container">
            <img src={url} alt="" className="card-image"/>
            <div className="card-text">
                <h3>{name}</h3>
                <h3>{description}</h3>
                <p>{user}</p>
            </div>
        </div>
    )
}
