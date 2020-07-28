import React from 'react';
import FloraMenu from './FloraMenu.jsx';

var RequestSchedule = (props) => {
  console.log(props)

  let FloraSelection = props.flora.map((data, index) => (
    <FloraMenu key={index} data={data}/>
  ))

  return(
    <form onSubmit={props.handleSubmit}>
      <label style={{marginRight: '20px'}} id='address'>Street Address: <input onChange={props.handleAddress}></input></label>
      <label style={{marginRight: '20px'}} id="city">City: <input onChange={props.handleCity}></input></label>
      <label style={{marginRight: '20px'}} id="state">State: <input onChange={props.handleState}></input></label>
      <label style={{marginRight: '20px'}} id="weekly-events">Total Events: <input onChange={props.handleEvents}></input></label>
      <label style={{marginRight: '20px'}} id="flora">Item: <select>{FloraSelection}</select></label>
      <button style={{width: '115px'}}>Submit</button>
    </form>
  )
}

export default RequestSchedule;