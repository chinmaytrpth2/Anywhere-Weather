import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSmog, faCloud, faBroom, faCloudSun, faCloudMoon, faCloudSunRain, faCloudShowersHeavy, faSnowflake, faCloudRain, faSun, faCloudMeatball  } from '@fortawesome/free-solid-svg-icons';

const Icon = ({type}) => {

  let icon = null;

  switch(type){
      case ('Clouds'):
      icon = <FontAwesomeIcon icon={faCloud} />
      break;
      case ('Mist'):
      icon = <FontAwesomeIcon icon={faSmog} />
      break;
      case ('Haze'):
      icon = <FontAwesomeIcon icon={faCloudSun} />
      break;
      case ('Clear'):
      icon = <FontAwesomeIcon icon={faSun} />
      break;
      case ('Sand'):
      icon = <FontAwesomeIcon icon={faBroom} />
      break;
      case ('Smoke'):
      icon = <FontAwesomeIcon icon={faSmog} />
      break;
      case ('Dust'):
      icon = <FontAwesomeIcon icon={faCloudMeatball} />
      break;
      case ('Drizzle'):
      icon = <FontAwesomeIcon icon={faCloudSun} />
      break;
      case ('Rain'):
      icon = <FontAwesomeIcon icon={faCloudRain} />
      break;
      case ('Thunderstorm'):
      icon = <FontAwesomeIcon icon={faCloudShowersHeavy} />
      break;
      case ('Snow'):
      icon = <FontAwesomeIcon icon={faSnowflake} />
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
