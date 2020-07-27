import React from 'react';
import DataCell from './DataCell.jsx';

var CurrentSchedule = (props) => {
  console.log("CS: ", props)
  let WateringSchedule = props.forecast.map((data, index) => (
    <DataCell key={index} data={data}/>
  ))

  return(
    <h1>{WateringSchedule}</h1>
  )
}

export default CurrentSchedule;