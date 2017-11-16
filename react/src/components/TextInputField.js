import React from 'react';

const TextInputField = props => {
  return(
    <label>{props.label}
      <input
        onChange={props.onChange}
        type='text'
        name={props.name}
        value={props.value}
      />
    </label>
  )
}

export default TextInputField;
