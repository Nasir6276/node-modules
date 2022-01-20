const http = require ('http');

// create server object 
http.createServer(function(req, res) {
    // write responce
    res.write('Hello World');
    res.end()
}).listen(5000, function() {
    console.log('server is running on port 5000...!');
}) 