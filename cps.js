function returnFirstCharacterCps(value1,ret1){
    ret1(value1[0]);
}

//returnFirstCharacterCps("This is a test", function(value){ console.log(value); });

function returnLastCharacterCps(value2,ret2){
    ret2(value2[value2.length-1]);
}

//returnLastCharacterCps("This is a test", function(value){ console.log(value); });

function getFirstAndLast(newStr,ret3){

    returnFirstCharacterCps(newStr, function(firstChar) {
        
        returnLastCharacterCps(newStr, function(lastChar) {
            
            ret3(firstChar+lastChar);
        });
    });
}

getFirstAndLast("hello", function(newStr) { console.log(newStr); });