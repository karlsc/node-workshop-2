var http = require('http');
var requestListener = function (req, response) {

    var start = new Date().getTime();
    while (new Date().getTime() - start < 10000){
    
    response.writeHead(200);
    response.end('Hello world!');
    }

};

var server = http.createServer(requestListener);

server.listen(process.env.PORT, process.env.IP);