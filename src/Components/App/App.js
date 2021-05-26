import React, { Component } from 'react';
import './App.css';
import {getReservations} from '../../apiCalls';
import Dashboard from '../Dashboard/Dashboard';
import ResCard from '../ResCard/ResCard';

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
        return <ResCard reservation={r}/>
      })
    }
  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>

        </div>
        <div className='resy-container'>
          <Dashboard displayReservations={this.displayReservations}/>
        </div>
      </div>
    )
  }
}

export default App;
