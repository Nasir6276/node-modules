const EventEmmiter = require('events');

// create class 
class MyEmmiter extends EventEmmiter { }

// init object
const myEmmiter = new MyEmmiter();

// Event listener 
myEmmiter.on('event', function() {
    console.log('Event fired');
})

// init event 
myEmmiter.emit('event');
