const axios = require('axios');
const developer = require('../models/developer')

module.exports = {
    async index(request, response) {
        const devs = await developer.find();
        response.json(devs);
    },

    async store(request, response) {
        console.log(request.body);
    
        const { github_username, techs, latitude, longitude } = request.body;
    
        let dev = await developer.findOne({github_username});

        if (!dev) {
            const apiResponse = await axios.get(`http://api.github.com/users/${github_username}`);
        
            const techsArray = techs.split(',').map(tech => tech.trim());
        
            const { name = login, avatar_url, bio } = apiResponse.data;
        
            const location = {
                type: 'Point',
                coordinates: [longitude, latitude]
            };
        
            dev = await developer.create({
                name,
                avatar_url,
                bio,
                github_username,
                techs: techsArray,
                location
            });
        }
        return response.json(dev);
    }
};