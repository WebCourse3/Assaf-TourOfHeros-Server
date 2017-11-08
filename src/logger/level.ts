export enum Level {
	Error = 31,
	Info = 32,
	Warning = 33,
	Debug = 34,
	Other = 37
}

export module LevelParser {
	export function ParseFromString(value: string) : Level{
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

	export function ParseToString(value: Level) : string{
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
}
