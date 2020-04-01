import React, { useState, useEffect } from 'react';

import './index.css';

function App() {

  const axios = require('axios');

  const [temp, setTemp] = useState([]);

  const lat = -28.6775;
  const lon = -49.36972;

  const params = {
    access_key: '1ff57548e829e7d039e72e93bd303898',
    query: `${lat},${lon}`
  }

  useEffect(() => {

    axios.get('http://api.weatherstack.com/current', {params})
    .then(response => {
      console.log(response.data)
      setTemp(response.data.current.temperature);
    }).catch(error => {
      console.log(error);
    });

  }, []);


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
          <p>{temp}</p>
        </div>
      </div>
      <footer>Caroline, 2020.</footer>
    </div>
  );
}

export default App;
