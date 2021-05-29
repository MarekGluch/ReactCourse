import React from 'react';

import Input from '../Input';

const Form = ({ fields, type, id, handleChangeInput, handleClickButton }) => (
  <form>
    {fields.map(props => <Input key={props.label} handleChange={handleChangeInput} {...props} />)}

    <button type="button" onClick={() => {
      handleClickButton(type, id);
    }}>Add</button>
  </form>
);

export default Form;