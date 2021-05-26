import React from 'react';
import './ResCard.css';

export default function ResCard({reservation}) {
    return (
        <div className="card">
            <h2>{reservation.name}</h2>
            <p>{reservation.date}</p>
            <p>{reservation.time}</p>
            <p>Number of guests: {reservation.number}</p>
            <button className="button" type="button">Cancel</button>
        </div>
    )
}