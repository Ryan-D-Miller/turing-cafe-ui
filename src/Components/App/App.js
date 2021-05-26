import React, { Component } from 'react';
import './App.css';
import {getReservations} from '../../apiCalls';
import Dashboard from '../Dashboard/Dashboard';

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

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>

        </div>
        <div className='resy-container'>
          <Dashboard />
        </div>
      </div>
    )
  }
}

export default App;
