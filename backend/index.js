const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb+srv://omnistack:KGMHclJRzTGCenoG@cluster0-lr1jq.mongodb.net/omnistack10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(express.json());

// Métodos HTTP: GET, POST, PUT, DELETE

// Tipos de Parâmetros
// Query Params: request.query (filtros, ordenação, paginação, ...)
// Route Params: reuest.params (identificar um recurso na alteração ou remoção)
// Body: request.body (dDados para criação ou alteração do registro)

// MongoDB (banco não relacional)

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

app.post('/users', (request, response) => {
    console.log(request.body);
    return response.json({ message: "Criando usuário" });
});

app.listen(3333)