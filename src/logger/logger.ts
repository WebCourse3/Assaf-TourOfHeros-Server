import { Level, LevelParser } from './level';
import { Configuration } from './configuration';
import * as fs from 'fs';
import ParseToString = LevelParser.ParseToString;

class Logger {
	name: string;
	config: Configuration;

	constructor(name: string, configuration?: Configuration) {
		this.name = name;

		if(configuration == null)
			configuration = Configuration.loadFromConfig();

		this.config = configuration;
	}

	log(level?: Level, ...messages: string[]) {
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

	info(...messages: string[]) {
		this.log(Level.Info, ...messages);
	}

	debug(...messages: string[]) {
		this.log(Level.Debug, ...messages);
	}

	warning(...messages: string[]) {
		this.log(Level.Warning, ...messages);
	}

	error(...messages: string[]) {
		this.log(Level.Error, ...messages);
	}

	private printToConsole(message: string, color?: number) {
		console.log(this.getColorString(color==null ? Level.Other : color), message);
	}

	private printToFile(message: string, level: Level) {
			fs.appendFileSync(this.config.filePath,ParseToString(level)+': ' + message + '\n');
	}

	private getColorString(colorCode: number) {
		return '\x1b[' + colorCode + 'm%s\x1b[0m';
	}
}

export = Logger;