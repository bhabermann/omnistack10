import React from 'react';

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
  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div className="input-block">
            <label htmlFor="github_username">Usuário do Github</label>
            <input name="github_username" id="github_username" required></input>
          </div>

          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input name="techs" id="techs" required></input>
          </div>

          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input name="latitude" id="latitude" required></input>
            </div>

            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input name="longitude" id="longitude" required></input>
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
