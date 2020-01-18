import React, { useEffect, useState } from 'react';
import api from './services/api.js'

import './global.css';
import './App.css'
import './Sidebar.css'
import './Main.css'

import DevItem from './components/DevItem'

// Principais conceitos do React
// Componente: Bloco isolado de html, css e js que não interfere no restante da aplicação.
// Propriedade: Informações que um componente pai passa pra um componente filho
// Estado: Informações mantidas pelo componente. (Imutabilidade)

// A tag vazia <> é chamada de "fragment" e serve para agrupar vários tags sem ter um tag sendo exibido no navegador

function App() {
  const [devs, setDevs] = useState([]);

  const [github_username, setGithubUsername] = useState('');
  const [techs, setTechs] = useState('');

  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;

        setLatitude(latitude);
        setLongitude(longitude);
        console.log(position);
      },
      (error) => {
        console.log(error);
      },
      {
        timeout: 30000
      }
    );
  }, []);

  useEffect(() => {
    async function loadDevs() {
      const response = await api.get('/devs');

      setDevs(response.data);
    }

    loadDevs();
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();

    const response = await api.post('/devs', {
      github_username,
      techs,
      latitude,
      longitude
    });

    console.log(response.data);
    setGithubUsername('');
    setTechs('');

    setDevs([...devs, response.data]);
  }

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form onSubmit={handleSubmit}>
          <div className="input-block">
            <label htmlFor="github_username">Usuário do Github</label>
            <input 
              name="github_username" 
              id="github_username" 
              required
              value={github_username}
              onChange={(e) => {setGithubUsername(e.target.value)}}              
            />
          </div>

          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input 
              name="techs" 
              id="techs" 
              required
              value={techs}
              onChange={(e) => {setTechs(e.target.value)}}
            />
          </div>

          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input 
                type="number" 
                name="latitude" 
                id="latitude" 
                required 
                value={latitude}
                onChange={(e) => {setLatitude(e.target.value)}}
              />
            </div>

            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input 
                type="number"
                name="longitude" 
                id="longitude" 
                required 
                value={longitude}
                onChange={(e) => {setLongitude(e.target.value)}}
              />
            </div>
          </div>

          <button type="submit">Salvar</button>
        </form>
      </aside>
      <main>
        <ul>
          {devs.map(dev => (
            <DevItem key={dev._id} dev={dev} />
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
