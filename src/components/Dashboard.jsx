import React from 'react';
import RequestSchedule from './RequestSchedule.jsx';
import CurrentSchedule from './CurrentSchedule.jsx';
import EmptyView from './EmptyView.jsx';
import axios from 'axios';
import styled from 'styled-components'

const DashboardWrapper = styled.div`
  font-family: 'M PLUS Rounded 1c', sans-serif;
  position: relative;
  width: 100%;
  background: #f4f4f4;
  height: 800px;
`;

const HeaderWrapper = styled.div`
  width: 100%;
  height: 75px;
  position: relative;
`;

const Header = styled.span`
  font-weight: 1000;
  font-size: 40px;
  padding-left: 155px;
`;

const UserGreeting = styled.span`
  position: absolute;
  font-weight: bold;
  font-size: 20px;
  right: 150px;
  top: 25px;
  padding-right: 3px;
`;;

const SubHeadingWrapper = styled.div`
  width: 100%;
  height: 75px;
  position: relative;
  background: #f4f4f4;
`;

const SubHeader = styled.div`
  position: absolute;
  font-weight: bold;
  font-size: 25px;
  left: 150px;
  top: 55px;
  padding-left: 5px;
  background: #f4f4f4;
`;

const Menu = styled.div`
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  display: flex;
  width: 100%;
  height: 40px;
  padding-left: 5px;
  background: black;
`;

const MenuItem = styled.div`
  margin-left: 100px;
  font-weight: bold;
  color: white;
  padding-top: 6px;
  font-size: 18px;
`;

const MenuItemHome = styled.div`
  margin-left: 155px;
  font-weight: bold;
  color: white;
  padding-top: 6px;
  font-size: 18px;
`;

const SignOut = styled.div`
  font-weight: bold;
  color: white;
  padding-top: 6px;
  font-size: 18px;
  margin-left: 675px;
`;

const ScheduleInput = styled.div`
  margin-left: 150px;
  top: 1000%;
`;

const CurrentView = styled.div`
  display: flex;
  position: relative;
  margin-left: 175px;
  margin-top : 15px;
  width: 100%;
  height: 421px;
`;

const Img = styled.div`
  margin-left: 50px;
`;

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
      flora: [],
      isMounted: false,
    }

    this.handleAddress = this.handleAddress.bind(this);
    this.handleCity = this.handleCity.bind(this);
    this.handleState = this.handleState.bind(this);
    this.handleEvents = this.handleEvents.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    axios.get('http://localhost:3000/flora')
    .then(data => {
      this.setState({
        flora: data.data,
        isMounted: true
      })
    })
    .then(data => console.log("FLORA:", this.state.flora))
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
    console.log(e.target.value)
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
    if (this.state.currentSchedule === false && this.state.isMounted === true) {
      return(
        <DashboardWrapper>
          <HeaderWrapper>
            <Header>drip</Header>
            <UserGreeting> Hello {this.state.currentUser.firstName}</UserGreeting>
          </HeaderWrapper>
          <SubHeadingWrapper>
            <Menu><MenuItemHome>Home</MenuItemHome><MenuItem>Interface</MenuItem><MenuItem>Help</MenuItem><MenuItem>Account Settings</MenuItem><SignOut>Sign Out</SignOut></Menu>
            <SubHeader>Dashboard</SubHeader>
          </SubHeadingWrapper>
          <ScheduleInput>
            <h3 style={{paddingLeft: '6px', fontWeight: '500'}}>Set New Schedule</h3>
            <div style={{paddingLeft: '5px'}}>
              <RequestSchedule flora={this.state.flora} handleAddress={this.handleAddress} handleCity={this.handleCity} handleState={this.handleState} handleEvents={this.handleEvents} handleSubmit={this.handleSubmit} />
            </div>
          </ScheduleInput>
          <h3 style={{marginLeft: '150px', paddingLeft: '6px', fontWeight: '500'}}>Your 7-Day Schedule</h3>
          <CurrentView>
            <div><EmptyView/></div>
            <Img><img src='https://hrphxfec.s3-us-west-1.amazonaws.com/mvp/generic-blog.jpg' style={{width: 'auto', height: '100%'}}></img></Img>
          </CurrentView>
        </DashboardWrapper>
      )
    } else if (this.state.currentSchedule === true && this.state.isMounted === true) {
      return(
        <DashboardWrapper>
          <HeaderWrapper>
            <Header>drip</Header>
            <UserGreeting> Hello {this.state.currentUser.firstName}</UserGreeting>
          </HeaderWrapper>
          <SubHeadingWrapper>
            <Menu><MenuItemHome>Home</MenuItemHome><MenuItem>Interface</MenuItem><MenuItem>Help</MenuItem><MenuItem>Account Settings</MenuItem><SignOut>Sign Out</SignOut></Menu>
            <SubHeader>Dashboard</SubHeader>
          </SubHeadingWrapper>
          <ScheduleInput>
            <h3 style={{paddingLeft: '6px', fontWeight: '500'}}>Set New Schedule</h3>
            <div style={{paddingLeft: '5px'}}>
              <RequestSchedule flora={this.state.flora} handleAddress={this.handleAddress} handleCity={this.handleCity} handleState={this.handleState} handleEvents={this.handleEvents} handleSubmit={this.handleSubmit} />
            </div>
          </ScheduleInput>
          <h3 style={{marginLeft: '150px', paddingLeft: '6px', fontWeight: '500'}}>Your 7-Day Schedule</h3>
          <CurrentView>
            <div><CurrentSchedule forecast={this.state.forecast}/></div>
            <Img><img src='https://hrphxfec.s3-us-west-1.amazonaws.com/mvp/generic-blog.jpg' style={{width: 'auto', height: '100%'}}></img></Img>
          </CurrentView>
        </DashboardWrapper>
      )
    } else {
      return(
        <div>Loading...</div>
      )
    }
  }
}

export default Dashboard;