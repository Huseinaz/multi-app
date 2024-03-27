import React, { useEffect, useState } from 'react';
import './style.css';
import axios from 'axios';

const FirstApp = () => {
    const [weather, setWeather] = useState([]);

    useEffect(() => {
        axios.get('https://api.open-meteo.com/v1/forecast?latitude=33.8933&longitude=35.5016&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,pressure_msl,surface_pressure,wind_speed_10m&hourly=temperature_2m&daily=temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min')
            .then(response => {
                setWeather(response.data);
                console.log(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    const days = [1, 2, 3];

    return (
        <div className='main'>
            <h1 className='header'>Weather App</h1>
            <div className='weather-container'>
                <div className='current-weather-card'>
                    <h2>Current Weather</h2>
                    <p>Temperature: {weather.current.apparent_temperature} {weather.current_units.apparent_temperature}</p>
                    <p>Humidity: {weather.current.relative_humidity_2m} {weather.current_units.relative_humidity_2m}</p>
                    <p>Surface Pressure: {weather.current.surface_pressure} {weather.current_units.surface_pressure}</p>
                    <p>Wind Speed: {weather.current.wind_speed_10m} {weather.current_units.wind_speed_10m}</p>
                </div>

                {days.map(day => (
                    <div key={day} className='day-weather-card'>
                        <h2>Date: {weather.daily.time[day]}</h2>
                        <p>Max Temperature: {weather.daily.apparent_temperature_max[day]} {weather.current_units.apparent_temperature}</p>
                        <p>Min Temperature: {weather.daily.apparent_temperature_min[day]} {weather.current_units.apparent_temperature}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FirstApp;
