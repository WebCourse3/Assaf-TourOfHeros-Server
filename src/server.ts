import * as express from 'express'

import { Configuration } from './logger/configuration';
import { Level } from './logger/level';
import Logger = require('./logger/logger');


const app = express()
const port = 3000;

var router = require('./router/router')

//init logger
var logger1: Logger = new Logger('logger', new Configuration(true, true, false, null, Level.Debug));
var logger2: Logger = new Logger('logger');

logger1.info('this is logger 1 speaking with info');
logger1.error('now with some error', 'this too');

logger2.log(null, 'and i am logger 2 writing to you');
logger2.warning('bye bye');
logger2.config

app.use('/', router)

app.listen(port, function () {
	console.log('Example app listening on port '+ port + '!')
})


module.exports.app = app;