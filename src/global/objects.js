'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const heros = require("../db/herosList");
const herosHandler = require("../db/herosHandler");
module.exports.herosHandler = new herosHandler(heros); //does this define a new herosHandler everytime?
//# sourceMappingURL=objects.js.map