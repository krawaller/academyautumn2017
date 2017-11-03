
var superLasange ={
    meat:2,
    onions: 5,
    pasta: 6,
    cola:1
}
var soup={
    potatoes: 5,
    egg:2,
    leek:7
}
var fanta={
    sprite:1,
    lemon:6
}

var ICA ={
    meat:20,
    onions:2,
    pasta:1,
    cola:20,
    potatoes:0.5,
    egg:0.25,
    leek:1.25,
    sprite:20,
    lemon:2.25
}
var COOP ={
    meat:10,
    onions:3,
    pasta:2,
    cola:10,
    potatoes:0.5,
    egg:0.25,
    leek:1.55,
    sprite:30,
    lemon:2.65
}

var stores ={
    ICA:ICA,
    COOP:COOP

}

function whatDoesItCost(recept,store) {

    var totalCost = 0;
    for (var ingredien in recept) {
        totalCost += recept[ingredien]*store[ingredien];
    }
    return totalCost;
}
function whereIsItTheMostCheepest(recept,stores) {
    var min =Number.MAX_VALUE;
    var cheapestStore;
    for(var butik in stores){
        
        if(whatDoesItCost(recept,stores[butik])<min){
            min = whatDoesItCost(recept,stores[butik]);
           
           cheapestStore=butik;
          
        }
    }
    return cheapestStore;
    
}
console.log("fanta är billigast på : "+whereIsItTheMostCheepest(fanta,stores));
console.log("soup är billigast på : "+whereIsItTheMostCheepest(soup,stores));
console.log("Lasange är billigast på : "+whereIsItTheMostCheepest(superLasange,stores));

console.log("fanta will cost:"+whatDoesItCost(fanta,ICA));
console.log("soup will cost:"+whatDoesItCost(soup,ICA));
console.log("superLasange will cost:"+whatDoesItCost(superLasange,ICA));

