const meliObject = require('./meli');
const authorizeMl = (code, redirect_uri) =>{
    return meliObject.authorize(code, redirect_uri) 
}
module.exports=authorizeMl