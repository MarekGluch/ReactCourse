import React from 'react';

const Input = ({ name, label, value, handleChange }) => (
  <>
    <label htmlFor={name}>{label}</label>

    <input id={name} type="text" value={value} onChange={({ target: { value: inputValue } }) => {
      handleChange(name, inputValue);
    }} />
  </>
);

export default Input;