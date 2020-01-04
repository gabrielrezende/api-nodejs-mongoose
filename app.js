const express = require('express');
const bodyParser = require('body-parser');
const app = express(); // create express app
const database = require('./config/db');

app.use(bodyParser.urlencoded({ extended: true })); // parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.json()); // parse requests of content-type - application/json

// ----------------------------------------
// Rotas de Auth
// ----------------------------------------
var AuthController = require('./src/Auth/AuthController');

app.post('/auth/register', AuthController.register);
app.post('/auth/login', AuthController.login);
app.post('/auth/logout', AuthController.logout);


// ----------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------
// Controllers
// ----------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------
var UserController = require('./src/User/UserController');
var PartnerController = require('./src/Partner/PartnerController');
var VerificaToken = require('./src/Token/VerificaToken');

// ----------------------------------------
// USER
// ----------------------------------------
app.get('/user/', VerificaToken, UserController.findAll);
app.get('/user/:id', VerificaToken, UserController.findById);

// ----------------------------------------
// PARTNER
// ----------------------------------------
app.get('/partner/', VerificaToken, PartnerController.findAll);
app.get('/partner/:id', VerificaToken, PartnerController.findById);
app.post('/partner/', VerificaToken, PartnerController.insert);
app.put('/partner/:id', VerificaToken, PartnerController.update);

// ----------------------------------------
module.exports = app;
// ----------------------------------------



