const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://omnistack:KGMHclJRzTGCenoG@cluster0-lr1jq.mongodb.net/omnistack10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
});

app.use(cors());
app.use(express.json());
app.use(routes);

// Métodos HTTP: GET, POST, PUT, DELETE

// Tipos de Parâmetros
// Query Params: request.query (filtros, ordenação, paginação, ...)
// Route Params: reuest.params (identificar um recurso na alteração ou remoção)
// Body: request.body (dDados para criação ou alteração do registro)

// MongoDB (banco não relacional)



app.listen(3333)