'use strict';
const heros = require('../db/herosList');
const herosHandler = require('../db/herosHandler.js');

module.exports.herosHandler = new herosHandler(heros);//does this define a new herosHandler everytime?




