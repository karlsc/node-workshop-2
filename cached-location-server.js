var http = require('http');
var request = require('request');
var cachedLocations = {};

var requestListener = function (req, response) {
  
    var userCity = req.url.substring(1);
    var userCityCap = userCity.charAt(0).toUpperCase() + userCity.slice(1);
    console.log(userCity);
    console.log(cachedLocations);
    if(!cachedLocations.hasOwnProperty(userCity)){
        
        request('https://maps.googleapis.com/maps/api/geocode/json?address=' + userCity +'&key=AIzaSyDt_OVnANCrxhc-_a5k9j5mV3dkakhpL30', function(err, res, body) {
        
            if(err){
                response.writeHead(200);
                response.end(err);
            } else{
                var data = JSON.parse(body);
                
                if(data.results[0] != undefined){
                    cachedLocations[userCity] = data.results[0].geometry.location;
                    response.writeHead(200);
                    response.end(userCityCap+' is located at '+roundValue(cachedLocations[userCity].lat)+' & '+roundValue(cachedLocations[userCity].lng)+".\nFresh response.");
                }    
            }
        });
    } else{
        response.writeHead(200);
        response.end(userCityCap+' is located at '+roundValue(cachedLocations[userCity].lat)+' & '+roundValue(cachedLocations[userCity].lng)+".\nCached response.");
    }
};   

function roundValue(x){
    return Math.floor(x*100)/100;
}  
    
    
//    request('https://maps.googleapis.com/maps/api/geocode/json?address=' + userCity +'&key=AIzaSyDt_OVnANCrxhc-_a5k9j5mV3dkakhpL30', function(err, res, body) {
//        
//        console.log(err, res, body);
//        if (err) {
//            response.writeHead(200);
//            response.end('Error information:' + err);           
//        } else {
//            var data = JSON.parse(body);
//            var firstResult = data.results[0];
//
//            if(firstResult && !cachedLocations.hasOwnProperty(userCity)){
//                var location = data.results[0].geometry.location;
//                cachedLocations[userCity] = location;
//                response.writeHead(200);
//                response.end(userCityCap+' is located at '+Math.floor(data.results[0].geometry.location.lat*100)/100+' & '+Math.floor(data.results[0].geometry.location.lng*100)/100+".\nFresh response.");
//            } else if(firstResult){
//                response.writeHead(200);
//                response.end(userCityCap+' is located at '+Math.floor(data.results[0].geometry.location.lat*100)/100+' & '+Math.floor(data.results[0].geometry.location.lng*100)/100+".\nCached response.");
//            } else{
//                response.writeHead(200);
//                response.end('Invalid city selected.'); 
//            }
//        }
//    }
//)};

var server = http.createServer(requestListener);

server.listen(process.env.PORT, process.env.IP);