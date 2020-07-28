import React from 'react';
import styled from 'styled-components';

const DataCellWrapper = styled.div`
  font-size: 12px;
  border: 1px solid black;
  width: 550;
  height: 50px;
  background: white;
  margin-bottom: 5px;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 2px 0;
  padding: 10px 5px 10px 5px;
  border: 0;
  outline: none;
  border-radius: 4px;
`;

var DataCell = (props) => {
  console.log("DATA CELL: ", props)
  let value = props.index + 1
  return(
    <DataCellWrapper>
      <div style={{width: '100%', paddingLeft: '5px', fontWeight: 'bold'}}>Day {value}: </div>
      <span style={{width: '100%', paddingLeft: '5px'}}>Start: {props.data.start}</span>
      <span style={{width: '100%', paddingLeft: '5px'}}>Temperature: {props.data.temperature} </span>
      <span style={{width: '100%', paddingLeft: '5px'}}>Duration: {props.data.duration} minutes</span>
      <span style={{width: '100%', paddingLeft: '5px'}} src={props.data.icon}></span>
    </DataCellWrapper>
  )
}

export default DataCell;