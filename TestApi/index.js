var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser')
var port = process.env.PORT || 8020
const router = require('./routes/routes')
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(express.json());
app.use(router);
app.use(express.static('public'));
var index = app.listen(port, () => {

    console.log('Listening on port ' + port);
});

module.exports = index