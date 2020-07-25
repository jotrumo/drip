import React from 'react';
import RequestSchedule from './RequestSchedule.jsx';
import CurrentSchedule from './CurrentSchedule.jsx';
import axios from 'axios';

class Dashboard extends React.Component {
  constructor(props) {
    super(props)

    this.state ={
      currentCity: '',
      currentState: '',
      currentWaterEvents: 0
    }
    this.handleCity = this.handleCity.bind(this);
    this.handleState = this.handleState.bind(this);
    this.handleEvents = this.handleEvents.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleCity(e) {
    this.setState({
      currentCity: e.target.value,
    })
  }

  handleState(e) {
    this.setState({
      currentState: e.target.value,
    })

  }

  handleEvents(e) {
    this.setState({
      currentWaterEvents: e.target.value,
    })
  }

  handleSubmit(e) {

    axios.post('http://localhost:3000/newSchedule', ({ city: this.state.currentCity, state: this.state.currentState, events: this.state.currentWaterEvents}))
    .then(res => console.log(res))
  };

  render() {

    return(
      <div>
        <h1>drip</h1>
        <h2>Dashboard</h2>
        <div>
          <h3>Set New Schedule</h3>
          <RequestSchedule handleCity={this.handleCity} handleState={this.handleState} handleEvents={this.handleEvents} handleSubmit={this.handleSubmit} />
        </div>
        <div>
          <h3>Current Schedule</h3>
          <CurrentSchedule/>
        </div>
      </div>
    )
  }
}

export default Dashboard;