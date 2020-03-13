import React, {useState} from 'react';
import './App.css';
import Weather from './components/Weather/Weather';
import Input from './components/Input/Input';
import { async } from 'q';


const API_KEY = "3c0647af179354972a06e028c20d3ffc";


function App() {

  const[City, setCity] = useState('');
  const[name, setName] = useState('');
  const[Min, setMin] = useState('');
  const[Max, setMax] = useState('');
  const[Temp, setTemp] = useState('');
  const[InputError, SetInputError] = useState(false);
  const[InputLabel, SetInputLabel] = useState('Enter a City...');
  const[WeatherInfo, setWeatherInfo] = useState('');

  let data;

  const getWeather = async(city) => {

    const toCelsuis = (temp) => {
      let C = Math.floor(temp-273.15);
      return C;
    }

    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${City}&appid=${API_KEY}`);
    if(api_call.status === 200){
    data = await api_call.json();
    setName(data.name);
    setTemp(data.main.temp);
    setMin(toCelsuis(data.main.temp_min));
    setMax(toCelsuis(data.main.temp_max));
    setWeatherInfo(data.weather[0].main);
    console.log(data);
    }
    else{
      alert("No Data like such in the DB!");
    }
  }


  const changeCity = (city) => {
    if(City){
      getWeather();
    }
    else{
      SetInputLabel("Please Enter City's Name");
      SetInputError(true);
    }
    
  }


  return (
    <div className="App">
      <h1>Weather App</h1>
      <Input changeCity={changeCity} 
      setCity={setCity} 
      City={City}
      Label={InputLabel}
      isError={InputError}/>

      <Weather name={name}
      temp={Temp} 
      min={Min} 
      max={Max}
      weatherInfo={WeatherInfo}/>
    </div>
  );
}

export default App;
