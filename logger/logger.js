"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var level_1 = require("./level");
var Logger = (function () {
    function Logger(name, configuration) {
        this.name = name;
        this.config = configuration;
    }
    Logger.prototype.log = function (level) {
        var messages = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            messages[_i - 1] = arguments[_i];
        }
        if (level == null) {
            level = this.config.level;
        }
        if (this.config.writeToConsole) {
            var useColors = this.config.useColors;
            for (var _a = 0, messages_1 = messages; _a < messages_1.length; _a++) {
                var message = messages_1[_a];
                this.printToConsole(message, useColors ? level : "");
            }
        }
        if (this.config.writeToFile) {
            var filePath = this.config.filePath;
        }
    };
    Logger.prototype.info = function () {
        var messages = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            messages[_i] = arguments[_i];
        }
        this.log.apply(this, [level_1.Level.Info].concat(messages));
    };
    Logger.prototype.debug = function () {
        var messages = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            messages[_i] = arguments[_i];
        }
        this.log.apply(this, [level_1.Level.Debug].concat(messages));
    };
    Logger.prototype.warning = function () {
        var messages = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            messages[_i] = arguments[_i];
        }
        this.log.apply(this, [level_1.Level.Warning].concat(messages));
    };
    Logger.prototype.error = function () {
        var messages = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            messages[_i] = arguments[_i];
        }
        this.log.apply(this, [level_1.Level.Error].concat(messages));
    };
    Logger.prototype.printToConsole = function (message, color) {
        console.log('%c ' + message, color == null ? "" : "color:" + color);
    };
    Logger.prototype.printToFile = function (message, color) {
    };
    return Logger;
}());
//# sourceMappingURL=logger.js.map