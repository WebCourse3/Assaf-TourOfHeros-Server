"use strict";
const express = require("express");
var router = express.Router();
//other routes
var heros = require('./herosRoute');
//configure other routes
router.use('/heros', heros);
//router routes
router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
});
router.get('/', function (req, res) {
    res.send('Home page');
});
module.exports = router;
//# sourceMappingURL=router.js.map