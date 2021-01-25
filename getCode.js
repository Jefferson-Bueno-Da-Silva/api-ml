const meliObject = require('./meli');
module.exports = meliObject.getAuthURL(process.env.REDIRECT_URI);