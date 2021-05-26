import React from 'react';
import './Dashboard.css';


export default function Dashboard({displayReservations}) {
    const reservations = displayReservations();
    return (
        <section className="dashboard">
            {reservations}
        </section>
    )
}