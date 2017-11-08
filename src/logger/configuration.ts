import { Level, LevelParser } from './level';

export class Configuration {
	writeToConsole: boolean;
	useColors: boolean;
	writeToFile: boolean;
	filePath: string;
	level: Level;

	constructor(writeToConsole: boolean, useColors: boolean, writeToFile: boolean, filePath: string, level: Level) {
		if (writeToFile && filePath == null) {
			throw new Error("file path is not valid");
		}

		this.writeToConsole = writeToConsole;
		this.useColors = useColors;
		this.writeToFile = writeToFile;
		this.filePath = filePath;
		this.level = level;
	}

	static loadFromConfig(path?: string) {
		var fs = require('fs');
		var logConfig = JSON.parse(fs.readFileSync(path == null ? './logconfig.json' : path, 'utf8'));

		return new Configuration(
			logConfig.writeToConsole,
			logConfig.useColors,
			logConfig.writeToFile,
			logConfig.filePath,
			LevelParser.ParseFromString(logConfig.level)
		)
	}
}