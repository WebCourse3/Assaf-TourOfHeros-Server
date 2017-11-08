import {Level} from './level';
import { Configuration } from './configuration';

class Logger {
	name: string;
	config: Configuration;

	constructor(name: string, configuration: Configuration) {
		this.name = name;
		this.config = configuration;
	}

	log(level?: Level, ...messages: string[]) {
		if (level == null) {
			level = this.config.level;
		}

		if (this.config.writeToConsole) {
			const useColors = this.config.useColors;
			for (let message of messages) {
				this.printToConsole(message, useColors ? level : "");
			}

		}

		if (this.config.writeToFile) {
			const filePath = this.config.filePath;

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

	private printToConsole(message: string, color?: string) {
		console.log('%c ' + message, color == null ? "" : "color:" + color);
	}

	private printToFile(message: string, color?: string) {
	}

}

