'use strict';

/**
 * Module dependencies.
 * @private
 */
const express = require('express');
const config = require('../config/config');

const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).jsonp({
        success: true,
        message: 'App version ' + config.version
    });
});

router.get('/status', (req, res) => {
    res.status(200).jsonp({
        success: true,
        message: 'API response received'
    });
});

module.exports = router;