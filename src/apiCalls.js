const reservations = "http://localhost:3001/api/v1/reservations";

const getReservations = () => {
    return fetch(reservations)
        .then(res => {
            if(res.ok) {
                return res.json()
            }
            throw new Error(res)
        })
}

const addReservation = (newRes) => {
    return fetch(reservations , {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newRes)
    })
        .then(res => {
            if (res.ok) {
                return res.json()
            }
            throw new Error(res)
        })
}

const deleteReservation = (id) => {
    return fetch(`${reservations}/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        }
    })
    .then(res => {
        if (res.ok) {
            return res.json()
        }
        throw new Error(res)
    })
}

export {
    getReservations,
    addReservation,
    deleteReservation
}