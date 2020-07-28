import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 650px;
  height: 250px;
`;

const DataCellWrapper = styled.div`
  font-size: 12px;
  border: 1px solid black;
  width: 600px;
  height: 50px;
  background: white;
  margin-bottom: 5px;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 2px 0;
  padding: 10px 5px 10px 5px;
  border: 0;
  outline: none;
  border-radius: 4px;
`;

var EmptyView = (props) => {

  return(
    <Wrapper>
      <DataCellWrapper>
        <div style={{width: '100%', paddingLeft: '5px', fontWeight: 'bold'}}>Day 1: </div>
        <span style={{width: '100%', paddingLeft: '5px'}}>Start: </span>
        <span style={{width: '100%', paddingLeft: '5px'}}>Temperature: </span>
        <span style={{width: '100%', paddingLeft: '5px'}}>Duration: </span>
      </DataCellWrapper>
      <DataCellWrapper>
        <div style={{width: '100%', paddingLeft: '5px', fontWeight: 'bold'}}>Day 2: </div>
        <span style={{width: '100%', paddingLeft: '5px'}}>Start: </span>
        <span style={{width: '100%', paddingLeft: '5px'}}>Temperature: </span>
        <span style={{width: '100%', paddingLeft: '5px'}}>Duration: </span>
      </DataCellWrapper>
      <DataCellWrapper>
        <div style={{width: '100%', paddingLeft: '5px', fontWeight: 'bold'}}>Day 3: </div>
        <span style={{width: '100%', paddingLeft: '5px'}}>Start: </span>
        <span style={{width: '100%', paddingLeft: '5px'}}>Temperature: </span>
        <span style={{width: '100%', paddingLeft: '5px'}}>Duration: </span>
      </DataCellWrapper>
      <DataCellWrapper>
        <div style={{width: '100%', paddingLeft: '5px', fontWeight: 'bold'}}>Day 4: </div>
        <span style={{width: '100%', paddingLeft: '5px'}}>Start: </span>
        <span style={{width: '100%', paddingLeft: '5px'}}>Temperature: </span>
        <span style={{width: '100%', paddingLeft: '5px'}}>Duration: </span>
      </DataCellWrapper>
      <DataCellWrapper>
        <div style={{width: '100%', paddingLeft: '5px', fontWeight: 'bold'}}>Day 5: </div>
        <span style={{width: '100%', paddingLeft: '5px'}}>Start: </span>
        <span style={{width: '100%', paddingLeft: '5px'}}>Temperature: </span>
        <span style={{width: '100%', paddingLeft: '5px'}}>Duration: </span>
      </DataCellWrapper>
      <DataCellWrapper>
        <div style={{width: '100%', paddingLeft: '5px', fontWeight: 'bold'}}>Day 6: </div>
        <span style={{width: '100%', paddingLeft: '5px'}}>Start: </span>
        <span style={{width: '100%', paddingLeft: '5px'}}>Temperature: </span>
        <span style={{width: '100%', paddingLeft: '5px'}}>Duration: </span>
      </DataCellWrapper>
      <DataCellWrapper>
        <div style={{width: '100%', paddingLeft: '5px', fontWeight: 'bold'}}>Day 7: </div>
        <span style={{width: '100%', paddingLeft: '5px'}}>Start: </span>
        <span style={{width: '100%', paddingLeft: '5px'}}>Temperature: </span>
        <span style={{width: '100%', paddingLeft: '5px'}}>Duration: </span>
      </DataCellWrapper>
    </Wrapper>
  )
}

export default EmptyView;