import React from 'react';
import DataCell from './DataCell.jsx';
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 650px;
  height: 250px;
`;

var CurrentSchedule = (props) => {
  console.log("CS: ", props)
  let WateringSchedule = props.forecast.map((data, index) => (
    <DataCell key={index} data={data} index={index}/>
  ))

  return(
    <Wrapper>{WateringSchedule}</Wrapper>
  )
}

export default CurrentSchedule;