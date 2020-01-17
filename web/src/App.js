import React from 'react';

import './global.css';
import './App.css'
import './Sidebar.css'

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

      </main>
    </div>
  );
}

export default App;
