import React from 'react';

import './index.css';

function App() {
  return (
    <div>
      <div className="container">
        <div className="query-content">
          <section>
            <h1> Query Temperature </h1>
            <p>Digite sua latitude e longitude para obter a temperatura</p>
          </section>

          <form>
            <input placeholder="Latitude" />
            <input placeholder="Longitude"/>

            <button type="submit">Pesquisar</button>
          </form>
        </div>
        <div className="return-content">
          <h1>Result</h1> 
          <p>Value</p>
        </div>
      </div>
      <footer>Caroline, 2020.</footer>
    </div>
  );
}

export default App;
