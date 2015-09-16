function getFortune(){
    
    var allFortune = ["fortune1","fortune2","fortune3","fortune4","fortune5","fortune6"];
    var randomFortune = allFortune[Math.floor(Math.random()*allFortune.length)];
    return randomFortune;
    
}

module.exports = {
    
    getFortune: getFortune
    
};