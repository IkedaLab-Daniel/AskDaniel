import React, { useState, useEffect } from "react";

const Weather = (props) => {
  const [weather, setWeather] = useState(null);
  const location = "Mabalacat"; // Set your specific location here
  const apiKey = "5c6ef43ee02c492487e135434242810"; // Replace with your actual API key

  useEffect(() => {
    // Function to fetch weather data
    const fetchWeather = async () => {
      try {
        const response = await fetch(
          `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}`
        );
        const data = await response.json();
        setWeather(data);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    fetchWeather();
  }, [apiKey, location]);

  if (!weather) return <div>Loading...</div>;

  return (
    <div id="weather">
        <span>
            {props.dayName} 
        </span>
        <span>
            {weather.current.temp_c}°C
        </span>    
        <span>
            {weather.current.condition.text}
        </span>
        <img src={weather.current.condition.icon} alt="Weather Icon" />
    </div>
  );
};

export default Weather;
