import React from 'react';

import './global.css';

// Principais conceitos do React
// Componente: Bloco isolado de html, css e js que não interfere no restante da aplicação.
// Propriedade: Informações que um componente pai passa pra um componente filho
// Estado: Informações mantidas pelo componente. (Imutabilidade)

// A tag vazia <> é chamada de "fragment" e serve para agrupar vários tags sem ter um tag sendo exibido no navegador

function App() {
  return (
    <div id="app">
      <aside>

      </aside>
      <main>

      </main>
    </div>
  );
}

export default App;
