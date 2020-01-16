const { Router } = require('express');
const axios = require('axios');
const developer = require('./models/developer')

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

routes.post('/devs', async (request, response) => {
    console.log(request.body);

    const { github_username, techs } = request.body;

    const apiResponse = await axios.get(`http://api.github.com/users/${github_username}`);

    const techsArray = techs.split(',').map(tech => tech.trim());

    const { name = login, avatar_url, bio } = apiResponse.data;

    console.log(name, avatar_url, bio, github_username, techsArray);

    const dev = await developer.create({
        name,
        avatar_url,
        bio,
        github_username,
        techs: techsArray
    });

    return response.json(dev);
});

module.exports = routes;