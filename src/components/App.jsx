import React from 'react';
import Dashboard from './Dashboard.jsx';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      verifiedUser: true,
      currentUser: {
        userName: 'jotrumo',
        firstName: 'Joey',
        lastName: 'Montoya',
        streetAddress: '1436 N El Camino Dr.',
        city: 'Tempe',
        state: 'Arizona'
      },
    }
    this.signOut = this.signOut.bind(this);
    this.singIn = this.signIn.bind(this);
  }

  componentDidMount() {

  }

  componentDidUpdate() {

  }

  signOut() {
    this.setState({
      verifiedUser: false
    })
  }

  signIn() {
    this.setState({
      verifiedUser: true
    })
  }


  render() {
    if (this.state.verifiedUser === false) {
      return (
        <div>
          <h1>drip</h1>
          <button onClick={this.enterDashboard}>ENTER</button>
        </div>
      )
    } else if ( this.state.verifiedUser === true) {
      return(
        <Dashboard currentUser={this.state.currentUser}/>
      )
    }
  }
}

export default App;