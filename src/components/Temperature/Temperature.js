import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTemperatureHigh, faTemperatureLow   } from '@fortawesome/free-solid-svg-icons';

const Temperature = (props) => {

  let result = null;

  if(props.min && props.max){
    result = <div>
    <FontAwesomeIcon icon={faTemperatureLow} />:{props.min}
    <FontAwesomeIcon icon={faTemperatureHigh} />:{props.max}
  </div>
  }

  return (
    <div>
      {result}
    </div>
  );
}

export default Temperature;
