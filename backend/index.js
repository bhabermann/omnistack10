const express = require('express');

const app = express();

// Métodos HTTP: GET, POST, PUT, DELETE

// Tipos de Parâmetros
// Query Params: request.query (filtros, ordenação, paginação, ...)
// Route Params: reuest.params (identificar um recurso na alteração ou remoção)
// Body:

app.get('/', (request, response) => {
    return response.json({ message: "Página inicial" });
});

app.get('/users', (request, response) => {
    console.log(request.query);
    return response.json({ message: "Buscando usuários" });
});

app.delete('/users/:id', (request, response) => {
    console.log(request.params);
    return response.json({ message: "Deletando usuários" });
});

app.listen(3333)