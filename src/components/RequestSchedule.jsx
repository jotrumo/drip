import React from 'react';

var RequestSchedule = (props) => {
  console.log(props)

  return(
    <form onSubmit={props.handleSubmit}>
      <label id='address'>Street Address: <input onChange={props.handleAddress}></input></label>
      <label id="city">City: <input onChange={props.handleCity}></input></label>
      <label id="state">State: <input onChange={props.handleState}></input></label>
      <label id="weekly-events">Weekly Events: <input onChange={props.handleEvents}></input></label>
      <button>Submit</button>
    </form>
  )
}

export default RequestSchedule;