var http = require('http');
var fs = require('fs');
var simply = require('./require_test');
var methodsDefined = require('./mmm');
http.createServer( (req, res) => {
    if(req.url === '/favicon.ico') {
        return res.end();
    }

    console.log('Incoming request to ' + req.url);

    var i=2;

    res.writeHead(200, {'Content-Type':'text/plain'});

    setTimeout( () => {
        fs.readFile(__filename, {
            encoding: 'utf8'
        }, (error, contents) =>{
            if(error)
            {
                console.error(error);
                return res.end();
            }
        console.log('sending response for '+req.url);
        res.end(contents);
        });
        
    }, 5000);

    while(i--)
        console.log("Loop value: "+i+'\r');

}).listen(1337, '127.0.0.1');

console.log('Server running at 127.0.0.1:1337');
console.log(methodsDefined.add(3,5));