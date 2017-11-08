"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const level_1 = require("./level");
class Configuration {
    constructor(writeToConsole, useColors, writeToFile, filePath, level) {
        if (writeToFile && filePath == null) {
            throw new Error("file path is not valid");
        }
        this.writeToConsole = writeToConsole;
        this.useColors = useColors;
        this.writeToFile = writeToFile;
        this.filePath = filePath;
        this.level = level;
    }
    static loadFromConfig(path) {
        var fs = require('fs');
        var logConfig = JSON.parse(fs.readFileSync(path == null ? './logconfig.json' : path, 'utf8'));
        return new Configuration(logConfig.writeToConsole, logConfig.useColors, logConfig.writeToFile, logConfig.filePath, level_1.LevelParser.ParseFromString(logConfig.level));
    }
}
exports.Configuration = Configuration;
//# sourceMappingURL=configuration.js.map