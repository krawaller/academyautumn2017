var supersoup = {
    potato: 3,
    onion: 1,
    corn: 1
};
var superstew = {
    potato: 5,
    meat: 4,
    carrot: 3,
    corn: 2
};
var bananacake = {
    banana: 4,
    dough: 2
};

var ica = {
    potato: 2,
    onion: 2,
    corn: 2,
    meat: 4,
    carrot: 1,
    banana: 2,
    dough: 5
};
var coop = {
    potato: 2,
    onion: 1,
    corn: 2,
    meat: 6,
    carrot: 2,
    banana: 3,
    dough: 4
};
var shops = {ica: ica, coop: coop};

console.log("Cheapest Store for superstew: " + findCheapestStore(superstew, shops));
var store = "coop";
console.log("Price for  superstew at coop: " + getCost(superstew, shops[store]));
store = "ica";
console.log("Price for  superstew at ica: " + getCost(superstew, shops[store]));

function getCost(recipe, shop){
    var cost = 0;
    for(var key in recipe){
        cost += recipe[key] * shop[key];
    }
    return cost;
}
function findCheapestStore(recipe, shops){
    var cheapestPrice = Infinity;
    var cheapestStore = "";
    for(var key in shops){
        if(getCost(recipe, shops[key]) < cheapestPrice){
            cheapestStore = key;
            cheapestPrice = getCost(recipe, shops[key]);
            //console.log(cheapestStore);
        }
    }
    return cheapestStore
}