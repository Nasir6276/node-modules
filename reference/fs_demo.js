const fs = require('fs');
const path = require('path');

// Create folder
// fs.mkdir(path.join(__dirname, '/test'), {}, function(err) {
//     if (err) throw err;
//     console.log('Folder created...');
// });

// Create and write to file 
// fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 'Hello world!', function(err) {
//     if (err) throw err;
//     console.log('file written to....');

//     fs.appendFile(path.join(__dirname, '/test', 'hello.txt'), 'i love node.js', function(err) {
//         if (err) throw err;
//         console.log('file written to....');
//     })
// })

// Read file
fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf-8', function(err, data) {
    if (err) throw err;
    console.log(data);
});