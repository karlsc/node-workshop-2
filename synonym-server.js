var http = require('http');
var request = require('request');

var requestListener = function (req, response) {
  
    var userWord = req.url.substring(1);
  
    request('http://words.bighugelabs.com/api/2/11c036dfbb595f828a10c807a507e679/' + userWord+"/", function(err, res, body) {
        console.log(err, res, body);
        var result = body[0];
        
        if(result){
            response.writeHead(200);
            response.end(body);
        } else {
            response.writeHead(200);
            response.end("Wrong word selection!");
        }
    });
};

var server = http.createServer(requestListener);

server.listen(process.env.PORT, process.env.IP);