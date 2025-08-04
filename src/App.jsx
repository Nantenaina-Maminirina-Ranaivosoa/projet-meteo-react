import React, { useState } from "react";
import "./App.css";

function App() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const API_KEY = "65e41c64cba3cc5ba65aa74b742dcb34";

  return (
    <div className="weather-app">
      <header>
        <h1>Application Meteo</h1>
        <form>
          <input type="text" placeholder="Entrez le nom d'une ville" value={city} 
          onChange={(e) => setCity(e.target.value)}/>
          <button type="submit">Rechercher</button>
        </form>
      </header>
      <main></main>
    </div>
  );
}

export default App;
