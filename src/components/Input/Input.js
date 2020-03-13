import React,{useState} from 'react';
import { TextField, Button } from '@material-ui/core';

import './Input.css';

const Input = ({changeCity, setCity, City, Label, isError}) => {

//   const[City, setCity] = useState('');
  
  return (
    <div className="Input">
    <div className="Inputfield">
      <TextField id="standard-basic" label={Label}
      error={isError} 
      className="input"
      type="text"
      value={City}
      onChange={({ target: { value } }) => setCity(value)}
    />
    </div>
    <div className="button">
    <Button variant="contained" color="secondary"  onClick={() => changeCity(City)}>
        Send
    </Button>
    </div>
    </div>
  );
}

export default Input;
