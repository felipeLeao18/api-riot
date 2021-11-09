const axios = require("axios");

const api = axios.create({
    baseURL: 'https://br1.api.riotgames.com/lol',
    headers: {
        "X-Riot-Token": "RGAPI-f25114d1-2d29-464e-b2e8-0507fc2936a4"
    }
})

module.exports = api;