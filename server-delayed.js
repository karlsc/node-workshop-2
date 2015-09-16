var http = require('http');
var requestListener = function (req, response) {

    setTimeout(function(){
    
    response.writeHead(200);
    response.end('Hello world!');
    
    },10000);
};

var server = http.createServer(requestListener);

server.listen(process.env.PORT, process.env.IP);