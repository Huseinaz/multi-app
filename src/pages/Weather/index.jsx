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
    }, [])

    return (
        <div>
            <div className='weather-card'>
                <p>{weather.current.apparent_temperature} {weather.current_units.apparent_temperature}</p>
                <p>{weather.daily.time[1]}</p>
                <p>max{weather.daily.apparent_temperature_max[1]} {weather.daily_units.apparent_temperature_max[1]}</p>
                <p>min{weather.daily.apparent_temperature_min[1]} {weather.daily_units.apparent_temperature_min[1]}</p>
            </div>
        </div>
    )
}

export default FirstApp