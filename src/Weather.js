import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo.js";
import WeatherForecast from "./WeatherForecast.js";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
    
    const [weatherData, setWeatherData] = useState({ ready: false });
    const [city, setCity] = useState(props.defaultcity);
    
    function handleResponse(response) {
        setWeatherData({
            ready: true,
            coordinates: response.data.coord,
            city: response.data.name,
            temperature: response.data.main.temp,
            humidity: response.data.main.humidity,
            date: new Date(response.data.dt * 1000),
            wind: response.data.wind.speed,
            icon: response.data.weather[0].icon,
            description: response.data.weather[0].description
        });
       
    }

    function handleSubmit(event) {
    event.preventDefault();
    search();
    }

    function handleCityChange(event) {
     setCity(event.target.value);
    }
    
    function search() {
        const apiKey = "2613244abb4a0a70a1aa2acdd9be4366";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);
    }
    if (weatherData.ready) {
    return(
        <div className="Weather">
            <form onSubmit={handleSubmit}>
                <div className="row"> 
                <div className="col-9">
             <input 
             type="search"
             placeholder="Enter a city..."
             className="form-control"
             autoFocus="on"
             onChange={handleCityChange}
             />
             </div>
             <div className="col-3">
             <input 
             type="submit" 
             value="Search" 
             className="btn btn btn-dark w-100"
             />
             </div>
             </div>
             </form>
             <WeatherInfo data={weatherData}/>
             <WeatherForecast coordinates={weatherData.coordinates} />  
        </div>
    );
    } else {
        search();
    return "loading...";
    }
}