import React, { useState } from "react";
import "./App.css";

function App() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const API_KEY = "65e41c64cba3cc5ba65aa74b742dcb34";
  const API_URL = "https://api.openweathermap.org/data/2.5/weather";

  const fetchWeather = async (e) => {
    e.preventDefault();
    if (!city) return;

    setLoading(true);
    setError(null);
    setWeatherData(null);

    try {
      const response = await fetch(
        `${API_URL}?q=${city}&appid=${API_KEY}&units=metric&lang=fr`
      );
      if (!response.ok) {
        throw new Error(
          "Ville non trouvée. Veuillez vérifier le nom de la ville."
        );
      }
      const data = await response.json();
      setWeatherData(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="weather-app">
      <header>
        <h1>Application Météo</h1>
        <form onSubmit={fetchWeather}>
          <input
            type="text"
            placeholder="Entrez le nom d'une ville"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <button type="submit">Rechercher</button>
        </form>
      </header>
      <main>
        {loading && <p>Chargement...</p>}
        {error && <p className="error">{error}</p>}
        {weatherData && (
          <div className="weather-display">
            <h2>
              {weatherData.name}, {weatherData.sys.country}
            </h2>
            <p className="temp">{Math.round(weatherData.main.temp)}°C</p>
            <p className="description">
              <img
                src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`}
                alt={weatherData.weather[0].description}
              />
              {weatherData.weather[0].description}
            </p>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
