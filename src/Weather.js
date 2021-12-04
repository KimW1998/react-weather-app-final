import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
    const [weatherData, setWeatherData] = useState({ ready: false });
    function handleResponse(response) {
        console.log(response.data);
        setWeatherData({
            ready: true,
            city: response.data.name,
            temperature: response.data.main.temp,
            humidity: response.data.main.humidity,
            date: "wednesday 08:00",
            wind: response.data.wind.speed,
            icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
        
            description: response.data.weather[0].description

        });
       
    }
    
    if (weatherData.ready) {
    return(
        <div className="Weather">
            <form>
                <div className="row"> 
                <div className="col-9">
             <input 
             type="search"
             placeholder="Enter a city..."
             className="form-control"
             autoFocus="on"
             />
             </div>
             <div className="col-3">
             <input 
             type="submit" 
             value="Search" 
             className="btn btn-primary w-100"
             />
             </div>
             </div>
             </form>
             
            <h1>{weatherData.city}</h1>
            <ul>
                <li>{weatherData.date}</li>
                <li>{weatherData.description}</li>
            </ul>
        
          <div className="row mt-3">
            <div className="col-6">
                <div className="clearfix">
                <img 
                src={weatherData.icon} 
                alt={weatherData.description} 
                className="float-left"
                /> 
                <span className="temperature">{Math.round(weatherData.temperature)}</span>
                <span className="unit">°C</span>
            </div>
            </div>
            <div className="col-6">
              <ul>
               <li>Humidity: {weatherData.humidity}%</li>
               <li>Wind: {weatherData.wind} km/h</li>
              </ul>
            </div>
          </div>
        </div>
    );
    } else {
        const apiKey = "2613244abb4a0a70a1aa2acdd9be4366";
    let city = "New York"
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "loading...";
    }
}