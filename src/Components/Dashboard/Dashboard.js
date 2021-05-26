import React from 'react';
import '.Dashboard.css';
import ResCard from '../ResCard/ResCard';

export default function Dashboard({displayReservations}) {
    const reservations = displayReservations();
    return (
        <section>
            {reservations}
        </section>
    )
}