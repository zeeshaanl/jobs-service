import * as winston from 'winston';
import 'winston-loggly-bulk';

class Logger {
    constructor() {
        // define the custom settings for each transport (file, console)
        const options = {
            file: {
                level: 'info',
                filename: 'logs/app.log',
                handleExceptions: true,
                json: true,
                maxsize: 5242880, // 5MB
                maxFiles: 5,
                colorize: false,
            },
            console: {
                level: 'debug',
                handleExceptions: true,
                json: false,
                colorize: true,
            },
            loggly: {
                subdomain: 'jobi',
                inputToken: process.env.LOGGLY_TOKEN,
                json: true,
                tags: ["Winston-Morgan"]
            }
        };

        // instantiate a new Winston Logger with the settings defined above
        this.logger = new (winston.Logger)({
            transports: [
                new winston.transports.Loggly(options.loggly),
                new winston.transports.File(options.file),
                new winston.transports.Console(options.console)
            ],
            exceptionHandlers: [
                new winston.transports.File({ ...options.file, filename: 'logs/exceptions.log' }),
                new winston.transports.Loggly({ ...options.loggly, tags: ['Exception-Handler'] })
            ],
            exitOnError: false, // do not exit on handled exceptions
        });
        this.stream = {
            write: (message, encoding) => {
                // use the 'info' log level so the output will be picked up by both transports (file and console)
                this.logger.info(message);
            },
        }
    }
}

export default Logger;