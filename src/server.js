"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const configuration_1 = require("./logger/configuration");
const level_1 = require("./logger/level");
const Logger = require("./logger/logger");
const app = express();
const port = 3000;
var router = require('./router/router');
//init logger
var logger1 = new Logger('logger', new configuration_1.Configuration(true, true, false, null, level_1.Level.Debug));
var logger2 = new Logger('logger');
logger1.info('this is logger 1 speaking with info');
logger1.error('now with some error', 'this too');
logger2.log(null, 'and i am logger 2 writing to you');
logger2.warning('bye bye');
app.use('/', router);
app.listen(port, function () {
    console.log('Example app listening on port ' + port + '!');
});
module.exports.app = app;
//# sourceMappingURL=server.js.map