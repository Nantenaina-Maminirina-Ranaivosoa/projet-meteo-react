import "./App.css";

function App() {
  return (
    <div className="weather-app">
      <header>
        <h1>Application Meteo</h1>
        <form>
          <input type="text" placeholder="Entrez le nom d'une ville" />
          <button type="submit">Rechercher</button>
        </form>
      </header>
      <main></main>
    </div>
  );
}

export default App;
