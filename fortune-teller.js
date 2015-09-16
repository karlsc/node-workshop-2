var fortune = require('./library/fortune.js');

var numOfFortunes = process.argv[2];

for(var i = 0 ; i < numOfFortunes ; i++){
    
    console.log(fortune.getFortune());
}


