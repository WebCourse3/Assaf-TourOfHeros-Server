"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const app = express();
const port = 3000;
var router = require('./router/router');
app.use('/', router);
app.listen(port, function () {
    console.log('Example app listening on port ' + port + '!');
});
module.exports.app = app;
//# sourceMappingURL=server.js.map