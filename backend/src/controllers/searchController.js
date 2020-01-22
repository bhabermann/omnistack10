// const axios = require('axios');
const developer = require('../models/developer');
const parseStringasArray = require('../utils/parseStringAsArray');

module.exports = {
    async index(request, response) {
        const {latitude, longitude, techs} = request.query;

        console.log(request.query);

        const techsArray = parseStringasArray(techs);

        const devs = await developer.find({
            techs: {
                $in: techsArray,
            },
            location: {
                $near: {
                    $geometry: {
                        type: 'Point',
                        coordinates: [longitude, latitude],
                    },
                    $maxDistance: 10000,
                }
            }
        });

        response.json(devs);
    }
}