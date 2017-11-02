var carbonara = {
    bacon: 3,
    onion: 2,
    pasta: 1
}

var eggsandbacon = {
    bacon: 3,
    egg: 2
}

var potatopancake = {
    bacon: 3,
    potato: 2,
    milk: 1
}

var ICA = {
    bacon: 5,
    onion: 2,
    pasta: 3,
    egg: 7,
    potato: 6,
    milk: 4
}

var Willys = {
    bacon: 4,
    onion: 6,
    pasta: 7,
    egg: 3,
    potato: 2,
    milk: 5
}

function cost(recipe, store) {
    var totalCost = 0;
    
    for (var key in recipe){ 
        
        totalCost = totalCost + (recipe[key] * store[key]);
    }
    +totalCost;
    return totalCost;
}

console.log("carbonara costs "+cost(carbonara,ICA)+" at ICA");
console.log("carbonara costs "+cost(carbonara,Willys)+" at Willys");

