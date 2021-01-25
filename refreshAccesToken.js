const meliObject = require('./meli');

const refreskToken = async (refresh_token) => {
    return await meliObject.refreshAccessToken(refresh_token);
}

module.exports = refreskToken;

