const { Router } = require('express');
const developerController = require('./controllers/developerController');
const searchController = require('./controllers/searchController');

const routes = Router();

routes.get('/', (request, response) => {
    return response.json({ message: "Página inicial" });
});

routes.get('/users', (request, response) => {
    console.log(request.query);
    return response.json({ message: "Buscando usuários" });
});

routes.delete('/users/:id', (request, response) => {
    console.log(request.params);
    return response.json({ message: "Deletando usuários" });
});

routes.post('/users', (request, response) => {
    console.log(request.body);
    return response.json({ message: "Criando usuário" });
});

routes.post('/devs', developerController.store);
routes.get('/devs', developerController.index);

routes.get('/search', searchController.index);

module.exports = routes;