"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Level;
(function (Level) {
    Level[Level["Error"] = 31] = "Error";
    Level[Level["Info"] = 32] = "Info";
    Level[Level["Warning"] = 33] = "Warning";
    Level[Level["Debug"] = 34] = "Debug";
    Level[Level["Other"] = 37] = "Other";
})(Level = exports.Level || (exports.Level = {}));
var LevelParser;
(function (LevelParser) {
    function ParseFromString(value) {
        switch (value) {
            case 'Error':
                return Level.Error;
            case 'Info':
                return Level.Info;
            case 'Warning':
                return Level.Warning;
            case 'Debug':
                return Level.Debug;
        }
        return Level.Other;
    }
    LevelParser.ParseFromString = ParseFromString;
    function ParseToString(value) {
        switch (value) {
            case Level.Error:
                return 'Error';
            case Level.Info:
                return 'Info';
            case Level.Warning:
                return 'Warning';
            case Level.Debug:
                return 'Debug';
        }
        return 'Other';
    }
    LevelParser.ParseToString = ParseToString;
})(LevelParser = exports.LevelParser || (exports.LevelParser = {}));
//# sourceMappingURL=level.js.map