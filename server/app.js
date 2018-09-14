'use strict';

/**
 * App dependencies.
 * @private
 */
const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require("method-override");
const helmet = require('helmet');
const path = require('path');
const app = express();
const router = express.Router();

//Security middleware
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(methodOverride('X-HTTP-Method-Override'));
app.use('/', express.static('dist'));

//App Routing
app.use('/', router);

router.get('/', (req, res) => {
    res.sendFile(path.resolve('dist/index.html'));
});

router.get('/status', (req, res) => {
    res.status(200).jsonp({
        success: true,
        message: process.env.VUE_APP_NAME + ' version ' + process.env.VUE_APP_VERSION
    });
});

module.exports = app;