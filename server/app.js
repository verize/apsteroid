'use strict';

/**
 * App dependencies.
 * @private
 */
const express = require('express');
const config = require('../config/config');
const session = require('express-session');
const bodyParser = require('body-parser');
const methodOverride = require("method-override");
const helmet = require('helmet');
const path = require('path');
const app = express();
const router = express.Router();

//Security middleware
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//Configure server session, secure cookies
var sessionConfig = {
    secret: config.secret,
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 60000
    }
};

// if (app.get('env') === 'production') {
//   app.set('trust proxy', 1) // trust first proxy
//   sessionConfig.cookie.secure = true // serve secure cookies
// }

app.use(session(sessionConfig));
app.use(methodOverride('X-HTTP-Method-Override'));

//App Routing
app.use('/', router);

router.get('/', (req, res) => {
    res.sendFile(path.resolve('dist/index.html'));
});

router.get('/status', (req, res) => {
    res.status(200).jsonp({
        success: true,
        message: config.name + ' version ' + config.version
    });
});

module.exports = app;