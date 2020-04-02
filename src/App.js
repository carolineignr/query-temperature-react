import React, { useState, useEffect } from 'react';

import './index.css';

function App() {

  const axios = require('axios');

  const [temp, setTemp] = useState('');
  const [lat, setLat] = useState('45.323');
  const [lon, setLon] = useState('65.342');

  const params = {
    access_key: '1ff57548e829e7d039e72e93bd303898',
    query: `${lat},${lon}`
  }


  async function updateTemperature(e) {
    e.preventDefault(); 
    e.target.reset();
    
    axios.get('http://api.weatherstack.com/current', {params})
      .then(response => {
        setTemp(response.data.current.temperature)
      }).catch(error => {
        console.log(error);
      })
  }


  return (
    <div>
      <div className="container">
        <div className="query-content">
          <section>
            <h1> Query Temperature </h1>
            <p>Digite sua latitude e longitude para obter a temperatura</p>
          </section>

          <form onSubmit={(e) => updateTemperature(e)}>
            <input 
              onChange={e => setLat(e.target.value)}
              type="text"
              placeholder="Latitude"
            />
            <input 
              placeholder="Longitude"
              onChange={e => setLon(e.target.value)}
              type="text"
            />

            <button type="submit">Pesquisar</button>
          </form>
        </div>
        <div className="return-content">
          <h1>Temperatura</h1>
          <p>{`${temp}°C`}</p>
        </div>
      </div>
      <footer>Caroline, 2020.</footer>
    </div>
  );
}

export default App;
