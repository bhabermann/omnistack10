const axios = require('axios');
const developer = require('../models/developer');
const parseStringasArray = require('../utils/parseStringAsArray');

module.exports = {
    async index(request, response) {
        const devs = await developer.find();
        console.log(devs);
        response.json(devs);
    },

    async store(request, response) {
        console.log(request.body);
    
        const { github_username, techs, latitude, longitude } = request.body;
    
        let dev = await developer.findOne({github_username});

        if (!dev) {
            const apiResponse = await axios.get(`http://api.github.com/users/${github_username}`);
        
            const techsArray = parseStringasArray(techs);
        
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