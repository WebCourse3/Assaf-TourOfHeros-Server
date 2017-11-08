import { Level } from './level';
export declare class Configuration {
    writeToConsole: boolean;
    useColors: boolean;
    writeToFile: boolean;
    filePath: string;
    level: Level;
    constructor(writeToConsole: boolean, useColors: boolean, writeToFile: boolean, filePath: string, level: Level);
}
