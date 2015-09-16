function getFortune(){
    
    var allFortune = ["fortune1","fortune2","fortune3","fortune4"];
    var randomFortune = allFortune[Math.floor(Math.random()*allFortune.length)];
    console.log(randomFortune);
    
}