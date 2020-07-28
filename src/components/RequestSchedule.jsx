import React from 'react';
import FloraMenu from './FloraMenu.jsx';
import styled from 'styled-components';

const Button = styled.button`
  background: #26a947;
  font-family: 'M PLUS Rounded 1c', sans-serif;
  color: white;
  font-weight: bold;
  border: 0;
  outline: none;
  cursor: pointer;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 2px 0;
  padding: 10px 25px 10px 25px;

  &:hover {
    transform: translateY(-1px);
    transition-duration: .2s;
    transition-timing-function: ease-in-out;
    box-shadow: rgba(0, 0, 0, .3) 0px 2px 2px 0;

  &:active {
    box-shadow: rgba(0, 0, 0, .3) 0px 2px 2px 0;
    transform: translateY(1px);
  }
`;

const Input = styled.input`
  box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 2px 0;
  padding: 10px 5px 10px 5px;
  border: 0;
  outline: none;
  border-radius: 4px;
`;

const Select = styled.select`
  box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 2px 0;
  padding: 10px 5px 10px 5px;
  border: 0;
  outline: none;
  border-radius: 4px;
`;

var RequestSchedule = (props) => {
  console.log(props)

  let FloraSelection = props.flora.map((data, index) => (
    <FloraMenu key={index} data={data}/>
  ))

  return(
    <form onSubmit={props.handleSubmit}>
      <label style={{marginRight: '20px'}} id='address'>Street Address: <Input onChange={props.handleAddress}></Input></label>
      <label style={{marginRight: '20px'}} id="city">City: <Input onChange={props.handleCity}></Input></label>
      <label style={{marginRight: '20px'}} id="state">State: <Input onChange={props.handleState}></Input></label>
      <label style={{marginRight: '20px'}} id="weekly-events">Total Events: <Input onChange={props.handleEvents}></Input></label>
      <label style={{marginRight: '20px'}} id="flora">Item: <Select>{FloraSelection}</Select></label>
      <Button>Submit</Button>
    </form>
  )
}

export default RequestSchedule;