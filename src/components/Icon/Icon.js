import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSmog, faCloud, faBroom, faCloudSun, faCloudMoon, faCloudSunRain, faCloudShowersHeavy, faSnowflake, faCloudRain, faSun, faCloudMeatball  } from '@fortawesome/free-solid-svg-icons';

const Icon = ({type}) => {

  let icon = null;

  switch(type){
      case ('Clouds'):
      icon = <FontAwesomeIcon icon={faCloud} size = '8x' />
      break;
      case ('Mist'):
      icon = <FontAwesomeIcon icon={faSmog} size = '8x' />
      break;
      case ('Haze'):
      icon = <FontAwesomeIcon icon={faCloudSun} size = '8x' />
      break;
      case ('Clear'):
      icon = <FontAwesomeIcon icon={faSun} size = '8x' />
      break;
      case ('Sand'):
      icon = <FontAwesomeIcon icon={faBroom} size = '8x' />
      break;
      case ('Smoke'):
      icon = <FontAwesomeIcon icon={faSmog} size = '8x'/>
      break;
      case ('Dust'):
      icon = <FontAwesomeIcon icon={faCloudMeatball} size = '8x' />
      break;
      case ('Drizzle'):
      icon = <FontAwesomeIcon icon={faCloudSun} size = '8x'/>
      break;
      case ('Rain'):
      icon = <FontAwesomeIcon icon={faCloudRain} size = '8x'/>
      break;
      case ('Thunderstorm'):
      icon = <FontAwesomeIcon icon={faCloudShowersHeavy} size = '8x'/>
      break;
      case ('Snow'):
      icon = <FontAwesomeIcon icon={faSnowflake} size = '8x'/>
      break;
    default:
      icon = null;
  }

  return (
    <div>
      {icon}
    </div>
  );
}

export default Icon;
