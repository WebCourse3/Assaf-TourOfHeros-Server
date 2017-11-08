'use strict';
import heros = require('../db/herosList');
import herosHandler = require('../db/herosHandler');

module.exports.herosHandler = new herosHandler(heros);//does this define a new herosHandler everytime?
