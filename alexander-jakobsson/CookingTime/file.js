
var easyBread = {
    flour: 3,
    milk: 1,
    butter: 3,
    egg: 2,
    yeast: 1
};

var coffeeWithCream = {
    coffee: 1,
    cream: 0.5
};

var beefTacos = {
    beef: 4,
    tacoSpice: 1,
    tacoShell: 4,
    tacoSauce: 1,
    bellPepper: 1,
    tomato: 2
};

var recipes = {
    easyBread: easyBread,
    coffeeWithCream: coffeeWithCream,
    beefTacos: beefTacos
};

var ICA = {
    flour: 9,
    milk: 2,
    butter: 15,
    egg: 12,
    yeast: 1,
    coffee: 15,
    cream: 11,
    beef: 7,
    tacoSpice: 3,
    tacoShell: 10,
    tacoSauce: 6,
    bellPepper: 8,
    tomato: 2
};

var COOP = {
    flour: 10,
    milk: 1,
    butter: 16,
    egg: 11,
    yeast: 2,
    coffee: 14,
    cream: 12,
    beef: 6,
    tacoSpice: 4,
    tacoShell: 9,
    tacoSauce: 7,
    bellPepper: 7,
    tomato: 3
};

var shops = {
    ICA: ICA,
    COOP: COOP
};

function costOfRecipe(recipe, shop) {
    // easyBread
    var totalCost = 0;
    for (var ingredient in recipe) {
        totalCost += recipe[ingredient] * shop[ingredient];
    }
    return totalCost;
}

function findCheapestStore(recipe, shops) {
    var lowestStoreCost = Number.MAX_VALUE;
    var currentStoreCost;
    var cheapestStore;
    for (var shop in shops) {
        currentStoreCost = costOfRecipe(recipe, shops[shop]);
        console.log(currentStoreCost);
        if (currentStoreCost < lowestStoreCost) {
            lowestStoreCost = currentStoreCost;
            cheapestStore = shop;
        }
    }
    return cheapestStore;
}


console.log("easyBread costs " + costOfRecipe(easyBread, ICA)
                + " at ICA");
console.log("easyBread costs " + costOfRecipe(easyBread, COOP)
                + " at COOP");
console.log("coffeeWithCream costs " + costOfRecipe(coffeeWithCream, COOP));

console.log("The cheapest store for easyBread is " 
        + findCheapestStore(easyBread, shops));

function everyRecipeEveryStore(recipes, shops) {
    for (var recipe in recipes) {
        for (var shop in shops) {
            console.log( 
                recipe + " costs " +
                costOfRecipe(recipes[recipe], shops[shop]) +
                " at " +
                shop   
            );
        }
    }
}

everyRecipeEveryStore(recipes, shops);