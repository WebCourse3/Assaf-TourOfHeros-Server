"use strict";
const level_1 = require("./level");
const configuration_1 = require("./configuration");
const fs = require("fs");
var ParseToString = level_1.LevelParser.ParseToString;
class Logger {
    constructor(name, configuration) {
        this.name = name;
        if (configuration == null)
            configuration = configuration_1.Configuration.loadFromConfig();
        this.config = configuration;
    }
    log(level, ...messages) {
        if (level == null) {
            level = this.config.level;
        }
        if (this.config.writeToConsole) {
            const useColors = this.config.useColors;
            for (let message of messages) {
                this.printToConsole(message, useColors ? level : null);
            }
        }
        if (this.config.writeToFile) {
            for (let message of messages) {
                this.printToFile(message, level);
            }
        }
    }
    info(...messages) {
        this.log(level_1.Level.Info, ...messages);
    }
    debug(...messages) {
        this.log(level_1.Level.Debug, ...messages);
    }
    warning(...messages) {
        this.log(level_1.Level.Warning, ...messages);
    }
    error(...messages) {
        this.log(level_1.Level.Error, ...messages);
    }
    printToConsole(message, color) {
        console.log(this.getColorString(color == null ? level_1.Level.Other : color), message);
    }
    printToFile(message, level) {
        fs.appendFileSync(this.config.filePath, ParseToString(level) + ': ' + message + '\n');
    }
    getColorString(colorCode) {
        return '\x1b[' + colorCode + 'm%s\x1b[0m';
    }
}
module.exports = Logger;
//# sourceMappingURL=logger.js.map