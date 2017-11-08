"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Configuration = (function () {
    function Configuration(writeToConsole, useColors, writeToFile, filePath, level) {
        if (writeToFile && filePath == null) {
            throw new Error("file path is not valid");
        }
        this.writeToConsole = writeToConsole;
        this.useColors = useColors;
        this.writeToFile = writeToFile;
        this.filePath = filePath;
        this.level = level;
    }
    return Configuration;
}());
exports.Configuration = Configuration;
//# sourceMappingURL=configuration.js.map