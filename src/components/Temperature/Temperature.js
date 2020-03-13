import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTemperatureHigh, faTemperatureLow   } from '@fortawesome/free-solid-svg-icons';
import './Temperature.css';


const Temperature = (props) => {

  let result = null;

  if(props.min && props.max){
    result = (
      <div className="temperature">
      <div className="min">
        <FontAwesomeIcon icon={faTemperatureLow} />:{props.min}&deg;C
      </div>
      <div className="max">
        <FontAwesomeIcon icon={faTemperatureHigh} />:{props.max}&deg;C
      </div>
    </div>
    )}

  return (
    <div>
      {result}
    </div>
  );
}

export default Temperature;
