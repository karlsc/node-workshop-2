var http = require('http');
var request = require('request');

var requestListener = function (req, response) {
  
    var userCity = req.url.substring(1);
  
    request('https://maps.googleapis.com/maps/api/geocode/json?address=' + userCity +'&key=AIzaSyDt_OVnANCrxhc-_a5k9j5mV3dkakhpL30', function(err, res, body) {
        //console.log(err, res, body);
        if (err) {
            response.writeHead(200);
            response.end('Error information:' + err);           
        } else {
            var data = JSON.parse(body);
            var firstResult = data.results[0];
          
            if (firstResult) {
                var location = data.results[0].geometry.location;
                var mapUrl = "https://maps.googleapis.com/maps/api/staticmap?center="+location.lat+","+location.lng+"&zoom=13&size=500x500&key=AIzaSyCFYgUuLsL7hhJEXH2FKSkbqlXb5DRUfmc";
                response.writeHead(200);
                response.end("<div style='text-align:center'><h1>Map of the requested location:</h1><img src='"+mapUrl+"'></div>");           
            } else {
                response.writeHead(200);
                response.end('Invalid city selected.');                         
            }
        }
    });
};

var server = http.createServer(requestListener);

server.listen(process.env.PORT, process.env.IP);