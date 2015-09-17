var http = require('http');
var requestListener = function (req, response) {
  
    response.writeHead(200);
    response.end('<h1>Hello world!</h1>');           
};

var server = http.createServer(requestListener);

server.listen(process.env.PORT, process.env.IP);