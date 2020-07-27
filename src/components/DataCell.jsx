import React from 'react';

var DataCell = (props) => {
  console.log("DATA CELL: ", props)
  return(
    <div>
      <span>{props.data.name}</span>
      <div>Temperature: {props.data.temperature} </div>
      <div>Start: {props.data.startTime} {props.data.temperature} </div>
      <div>Duration: 15 minutes</div>
      <div src={props.data.icon}></div>
    </div>
  )
}

export default DataCell;