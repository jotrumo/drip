import React from 'react';

var FloraMenu = (props) => {
  console.log("FLORA: ", props)

  return(
      <option onChange={e => props.handleEvents(e, props.data.events)}>{props.data.name}</option>
  )
}

export default FloraMenu;