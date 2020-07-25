import React from 'react';
import Dashboard from './Dashboard.jsx';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      verifiedUser: true
    }
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
        <Dashboard/>
      )
    }
  }
}

export default App;