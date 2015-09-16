var http = require('http');
var request = require('request');

var requestListener = function (req, response) {
  
    var userCity = req.url.substring(1);
  
    request('https://maps.googleapis.com/maps/api/geocode/json?address=' + userCity +'&key=AIzaSyDt_OVnANCrxhc-_a5k9j5mV3dkakhpL30', function(err, res, body) {
        console.log(err, res, body);
        if (err) {
            response.writeHead(200);
            response.end('Error information:' + err);           
        } else {
            var data = JSON.parse(body);
            var firstResult = data.results[0];
          
            if (firstResult) {
                var location = data.results[0].geometry.location;
                response.writeHead(200);
                response.end(userCity+' is located at ' + location.lat + ', ' + location.lng);           
            } else {
                response.writeHead(200);
                response.end('Invalid city selected.');                         
            }
        }
    });
};

var server = http.createServer(requestListener);

server.listen(process.env.PORT, process.env.IP);