const restify = require('restify');
const porta = process.env.PORT || 8080;
const servidor = restify.createServer();
const request = require("request");
const cron = require("node-cron");

cron.schedule("*/1 * * * *", () => {
    let url = 'http://api-weather-ska.herokuapp.com/SaoLeopoldo';
    request(url, {json: true}, (err, res, body) => {
        if (err) {
            return console.log(err);
        }
    })
});

servidor.listen(porta, () => {
    console.log('Servidor de pé em http://localhost:' + porta);
    console.log('Pra derrubar o servidor: ctrl + c');
});
