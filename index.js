const http = require ('http');
const path = require ('path');
const fs = require ('fs');

const server = http.createServer(function(req, res) {
    // if(req.url === '/') {
    //     fs.readFile(path.join(__dirname, 'public', 'index.html'), function(err, content) {
    //         if (err) throw err;
    //         res.writeHead(200, {'Content-Type': 'text/html' });
    //         res.end(content);
    //     })
    // }

    // if(req.url === '/api/user') {
    //         const user = [
    //             {name: 'Nasir', age: 12},
    //             {name: 'Bura', age: 26}
    //         ];
    //         res.writeHead(200, {'Content-Type': 'application/json' });
    //         res.end(JSON.stringify(user));
    //     }

    // Build file path 
    let filePath = path.join(
        __dirname,
        'public',
        req.url === '/' ? 'index.html' : req.url
    );

    // Extension of file 
    let extname = path.extname(filePath);

    // Initial content type 
    let contentType = 'text/html';

    // check ext an set content type 
    switch(extname) {
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.css':
            contentType = 'text/css';
            break;
        case '.json':
            contentType = 'application/json';
            break;
        case '.png':
            contentType = 'image/png';
            break;
        case '.jpg':
            contentType = 'image/jpg';
            break;
    }

    // Read file 
    fs.readFile(filePath, function(err, content) {
        if(err) {
            if(err.code == 'ENOENT') {
                // Page not found
                fs.readFile(path.join(__dirname, 'public', '404.html'), function(err, content) {
                    res.writeHead(200, {'Content-Type': 'text/html' });
                    res.end(content, 'utf-8')
                })
            } else {
                // Some server error 
                res.writeHead(500);
                res.end(`Server Error: ${err.code}`);
            }
        } else {
            // Success 
            res.writeHead(200, {'Content-Type': contentType });
            res.end(content, 'utf-8');
        }
    })
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, function() {
    console.log(`Server is running on port ${PORT}`);
});