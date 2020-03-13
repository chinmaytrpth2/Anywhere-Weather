import React,{useState} from 'react';

const Input = ({changeCity, setCity, City}) => {

//   const[City, setCity] = useState('');
  
  return (
    <div>
      <h1>Enter City Name:</h1>
      <input
      className="input"
      type="text"
      placeholder="Enter a City..."
      value={City}
      onChange={({ target: { value } }) => setCity(value)}
    />
    <button className="sendButton" onClick={() => changeCity(City)}>Send</button>
    </div>
  );
}

export default Input;
