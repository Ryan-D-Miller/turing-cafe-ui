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

export {
    getReservations
}