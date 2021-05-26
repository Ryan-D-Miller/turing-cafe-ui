import React from 'react';
import './ResCard.css';

export default function ResCard(props) {
    return (
        <div className="card">
            <h2>{props.name}</h2>
            <p>{props.date}</p>
            <p>{props.time}</p>
            <p>Number of guests: {props.number}</p>
        </div>
    )
}