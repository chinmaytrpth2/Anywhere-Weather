import React from 'react';

import Icon from '../../components/Icon/Icon';
import Temperature from '../../components/Temperature/Temperature';

const Weather = ({name, min, max, temp, weatherInfo}) => {
  return (
    <div>
      <h1>{name}</h1>
      <Icon type={weatherInfo} />
      <h2>{weatherInfo}</h2>
      <Temperature min={min} max={max}/>
    </div>
  );
}

export default Weather;
