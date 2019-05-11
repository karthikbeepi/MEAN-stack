const http = require('http');
http.createServer( (req, res) =>{
    if(req.url === '/' && req.method === 'GET')
    {
        res.writeHead(200, {'Content-Type':'text/html'});
        res.end("Hello World");
    }
    else if(req.url === '/act' && req.method === 'GET')
    {
        res.writeHead(200, {'Content-Type':'text/html'});
        res.end("Hello Account");
    }
    else
    {
        res.writeHead(404, {'Content-Type':'text/html'});
        res.end("Page not found!");
    }

}).listen(1337, '127.0.0.1');