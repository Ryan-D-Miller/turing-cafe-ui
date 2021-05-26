import React, { Component } from 'react';
import './App.css';
import {getReservations, addReservation, deleteReservation} from '../../apiCalls';
import Dashboard from '../Dashboard/Dashboard';
import ResCard from '../ResCard/ResCard';
import Form from '../Form/Form';

class App extends Component {
  constructor() {
    super();
    this.state = {
      reservations: []
    }
  }

  componentDidMount() {
    getReservations()
      .then((data) => {
        this.setState({ reservations: data})
      })
  }

  displayReservations=() => {
    if(this.state.reservations) {
      return this.state.reservations.map(r => {
        return <ResCard reservation={r} key={r.id} deleteRes={this.deleteRes}/>
      })
    }
  }

  addReservation = (newReservation) => {
    addReservation(newReservation)
      .then(data => {
        this.setState({ reservations: [...this.state.reservations, newReservation] })
      })
      .catch((error) => {
        console.log('ERRoR: ', error)
      })
  }

  deleteRes = (id) => {
    deleteReservation(id)
      .then((data) => {
        this.setState({ reservations: data })
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          <Form addReservation={this.addReservation}/>
        </div>
        <div className='resy-container'>
          <Dashboard displayReservations={this.displayReservations}/>
        </div>
      </div>
    )
  }
}

export default App;
