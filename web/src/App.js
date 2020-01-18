import React, { useEffect, useState } from 'react';

import './global.css';
import './App.css'
import './Sidebar.css'
import './Main.css'

// Principais conceitos do React
// Componente: Bloco isolado de html, css e js que não interfere no restante da aplicação.
// Propriedade: Informações que um componente pai passa pra um componente filho
// Estado: Informações mantidas pelo componente. (Imutabilidade)

// A tag vazia <> é chamada de "fragment" e serve para agrupar vários tags sem ter um tag sendo exibido no navegador

function App() {
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

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div className="input-block">
            <label htmlFor="github_username">Usuário do Github</label>
            <input 
              name="github_username" 
              id="github_username" 
              required
              value={github_username}
              onChange={e => setGithubUsername(e.target.valeu)}              
            />
          </div>

          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input 
              name="techs" 
              id="techs" 
              required
              value={techs}
              onChange={e => setTechs(e.target.valeu)}
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
                onChange={e => setLatitude(e.target.valeu)}
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
                onChange={e => setLongitude(e.target.valeu)}
              />
            </div>
          </div>

          <button type="submit">Salvar</button>
        </form>
      </aside>
      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/7130275?s=460&v=4" alt="Bruno Habermann"/>
              <div className="user-info">
                <strong>Bruno Habermann</strong>
                <span>.Net, React, SQL Server</span>
              </div>
            </header>
            <p>Bio do github com várias informações aleatórias só pra ficar com textão aqui e ver o comportamento do componente</p>
            <a href="https://github.com/bhabermann">Acessar perfil do Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/7130275?s=460&v=4" alt="Bruno Habermann"/>
              <div className="user-info">
                <strong>Bruno Habermann</strong>
                <span>.Net, React, SQL Server</span>
              </div>
            </header>
            <p>Bio do github com várias informações aleatórias só pra ficar com textão aqui e ver o comportamento do componente</p>
            <a href="https://github.com/bhabermann">Acessar perfil do Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/7130275?s=460&v=4" alt="Bruno Habermann"/>
              <div className="user-info">
                <strong>Bruno Habermann</strong>
                <span>.Net, React, SQL Server</span>
              </div>
            </header>
            <p>Bio do github com várias informações aleatórias só pra ficar com textão aqui e ver o comportamento do componente</p>
            <a href="https://github.com/bhabermann">Acessar perfil do Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/7130275?s=460&v=4" alt="Bruno Habermann"/>
              <div className="user-info">
                <strong>Bruno Habermann</strong>
                <span>.Net, React, SQL Server</span>
              </div>
            </header>
            <p>Bio do github com várias informações aleatórias só pra ficar com textão aqui e ver o comportamento do componente</p>
            <a href="https://github.com/bhabermann">Acessar perfil do Github</a>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;
