const EventEmmiter = require('events');
const uuid = require('uuid');

class Logger extends EventEmmiter {
    log(msg) {
        // call event
        this.emit('message', {id: uuid.v4(), msg});
    }
}

// module.exports = Logger;

const logger = new Logger();

logger.on('message', data => console.log('Called Listener', data));

logger.log('Hello world');