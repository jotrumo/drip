import React from 'react';

var DataCell = (props) => {
  console.log("DATA CELL: ", props)
  return(
    <div>
      <span>{props.data.name}</span>
      <div>Temperature: {props.data.temperature} </div>
      <div>Start: {props.data.start}</div>
      <div>Duration: {props.data.duration} minutes</div>
      <div src={props.data.icon}></div>
    </div>
  )
}

export default DataCell;