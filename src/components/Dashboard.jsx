import React from 'react';
import RequestSchedule from './RequestSchedule.jsx';
import CurrentSchedule from './CurrentSchedule.jsx';
import axios from 'axios';

class Dashboard extends React.Component {
  constructor(props) {
    super(props)

    this.state ={
      currentAddress: '',
      currentCity: '',
      currentState: '',
      currentWaterEvents: 0,
      forecast: {},
      currentUser: props.currentUser,
      currentSchedule: false,
    }

    this.handleAddress = this.handleAddress.bind(this);
    this.handleCity = this.handleCity.bind(this);
    this.handleState = this.handleState.bind(this);
    this.handleEvents = this.handleEvents.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
  }

  componentDidUpdate(prevState) {
    if(prevState !== this.state) {
      console.log("STATE HAS UPDATED")
      console.log("STATE", this.state.forecast)
    }
  }

  handleAddress(e) {
    this.setState({
      currentAddress: e.target.value,
    })
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
    e.preventDefault();
    axios.post('http://localhost:3000/newSchedule', ({ address: this.state.currentAddress, city: this.state.currentCity, state: this.state.currentState, events: this.state.currentWaterEvents}))
    .then(data => this.setState({
      forecast: data.data,
      currentSchedule: true,
    }))
  };

  render() {
    if (this.state.currentSchedule === false) {
      return(
        <div>
          <h1>drip</h1>
          <h2>Dashboard</h2>
          <h3> Hello {this.state.currentUser.firstName}</h3>
          <h6>Sign Out</h6>
          <div>
            <h3>Set New Schedule</h3>
            <RequestSchedule handleAddress={this.handleAddress} handleCity={this.handleCity} handleState={this.handleState} handleEvents={this.handleEvents} handleSubmit={this.handleSubmit} />
          </div>
        </div>
      )
    } else {
      return(
        <div>
          <h1>drip</h1>
          <h2>Dashboard</h2>
          <h3> Hello {this.state.currentUser.firstName}</h3>
          <h6>Sign Out</h6>
          <div>
            <h3>Set New Schedule</h3>
            <RequestSchedule handleAddress={this.handleAddress} handleCity={this.handleCity} handleState={this.handleState} handleEvents={this.handleEvents} handleSubmit={this.handleSubmit} />
          </div>
          <div>
            <h3>Your 7-Day Schedule</h3>
            <CurrentSchedule forecast={this.state.forecast}/>
          </div>
        </div>
      )
    }
  }
}

export default Dashboard;