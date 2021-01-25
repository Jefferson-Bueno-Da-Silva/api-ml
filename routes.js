const routes = require('express').Router();
const getCode = require('./getCode');
const authorizeMl = require('./getAuth');
const refreshToken = require('./refreshAccesToken');

var token = {
    access_token: String,
    token_type: String,
    expires_in: String,
    scope: String,
    user_id: String,
    refresh_token: String
}

//FAZ A PRIMEIRA AUTENTICAÇÃO
routes.get('/login', async function (req, res) {
    var tokens = await authorizeMl(req.query.code, process.env.REDIRECT_URI);
    const { access_token,  token_type, expires_in, scope, user_id, refresh_token} = tokens
    token = {
        access_token: access_token,
        token_type: token_type,
        expires_in: expires_in,
        scope: scope,
        user_id: user_id,
        refresh_token: refresh_token
    }
    res.json({
        'status': 200,
        'description':'connected',
        'code': token.refresh_token
    });
})

//GERA REFRESH TOKEN
routes.post('/refresh',async function (req, res){
    if(req.body.user == process.env.USER && req.body.password == process.env.PASSWORD){
        var uri_refresh = await refreshToken(req.body.refresh)
        const { access_token,  token_type, expires_in, scope, user_id, refresh_token} = uri_refresh
        token = {
            access_token: access_token,
            token_type: token_type,
            expires_in: expires_in,
            scope: scope,
            user_id: user_id,
            refresh_token: refresh_token
        }
        res.json({
            'status': 200,
            'description':'connected'
        });
    }else{
        res.json({
            'status': 401,
            'description': "user or password incorrect"
        })
    }
});

//RAIZ DA CHAMADA
routes.post('/token', async function (req, res) {
    if(req.body.user == process.env.USER && req.body.password == process.env.PASSWORD){
        res.send(token)
    }else{
        res.json({
            'status': 401,
            'description': "user or password incorrect"
        })
    }
})

//RAIZ DA CHAMADA
routes.get('/', async function (req, res) {
    res.redirect(getCode)
})

// TODO: exemplo de notificações
routes.get('/notifications', async function (req, res){
    res.send('ok');
    // Recomendamos enviar um status 200 o mais rápido possível.
    // Você pode fazer algo assíncrono logo em seguida. Por exemplo
    // salvar num banco de dados de tempo real, como o firebase.
});

module.exports = routes;