import "./App.css";
import React, { useEffect, useState } from "react";
// import { React } from "react";

// call API
let apiUrl = "https://api.openweathermap.org/data/2.5/weather";
let apiKey = "fa7b9c40855977945170fd631d91941b"; // OpenWeather free key(default)
let city ="Seattle, USA"; //current location

function Weather() {
    const [weather, setWeather] = useState(null);
    useEffect(() => {
        let api = `${apiUrl}?q=${city}&appid=${apiKey}&units=imperial`;
        fetch(api).then(response => response.json()).then(data => {
            setWeather(data);
        })   
    }, []);

    return (
        <h2>It is currently {weather && weather.main.temp}° in {city}.</h2>
    );
}

export default Weather;