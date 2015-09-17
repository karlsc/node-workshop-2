var http = require('http');
var request = require('request');

var requestListener = function (req, response) {
  
    var userWord = req.url.substring(1);
  
    request('http://words.bighugelabs.com/api/2/11c036dfbb595f828a10c807a507e679/' + userWord+"/json", function(err, res, body) {
        //console.log(err, res, body);
        if(err){
            response.writeHead(200);
            response.end(err);
        } else {
            var result = body[0];
        
            if(result){
                var format = JSON.parse(body);
                var nounSyn = ((format.noun.syn).map(function(x) { return x[0].toUpperCase() + x.slice(1); })).join(", ");
                var verbSyn = ((format.verb.syn).map(function(x) { return x[0].toUpperCase() + x.slice(1); })).join(", ");
                response.writeHead(200);
                response.end("Noun synonyms:\n"+nounSyn+".\n\nVerb synonyms:\n"+verbSyn+".");
            } else {
                response.writeHead(200);
                response.end("Wrong word selection!");
            }
        }    
    });
};

var server = http.createServer(requestListener);

server.listen(process.env.PORT, process.env.IP);