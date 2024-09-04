const os = require('os');

var totalMemory = os.totalmem();
var freeMemory = os.freemem();

console.log('Total Memory: ' + totalMemory);
console.log(`Free Memory: ${freeMemory}`);


const fs = require('fs');

const files = fs.readdirSync('./');

console.log(files);

fs.readdir('./', function(err, files) {
    if (err) console.log('Error', err);
    else console.log('Result', files);
});


const EventEmitter = require('events');
const emitter = new EventEmitter();


emitter.emit()
