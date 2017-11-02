//recipes
var supersoup = {
  potato: 3,
  onion: 1,
  corn: 1
};

var cowsoup = {
	cow: 1,
	onion: 2,
	potato: 4,
};

var chickensoup = {
	chicken: 2,
	onion: 1,
	leek: 1,
	corn: 3	
};

var stores ={
	ICA:{potato: 2,	onion: 1,corn: 4,cow: 20,chicken: 15,leek: 3,},
	Lidl:{potato: 1,onion: 1,corn: 5,cow: 28,chicken: 12,leek: 4,}	
}

//funcions


function priceCalculator(recipe,store){
	var price = 0;
	for(var ingredient in recipe){		
		price += recipe[ingredient]*store[ingredient];
	}
	return price;
}

function findCheapestStore(recipe, stores){
	var lowestPrice = Infinity;
	var cheapestStore;
	
	for(var store in stores){
		var price = priceCalculator(recipe,stores[store]);		
		if(price < lowestPrice){
			lowestPrice = price;
			cheapestStore = store;
		}
	}
	return cheapestStore;	
}

console.log("supersoup costs "+priceCalculator(supersoup,stores.ICA)+" at ICA");
console.log("cowsoup costs "+priceCalculator(cowsoup,stores.ICA)+" at ICA");
console.log("chickensoup costs "+priceCalculator(chickensoup,stores.ICA)+" at ICA");
console.log("supersoup costs "+priceCalculator(supersoup,stores.Lidl)+" at Lidl");
console.log("cowsoup costs "+priceCalculator(cowsoup,stores.Lidl)+" at Lidl");
console.log("chickensoup costs "+priceCalculator(chickensoup,stores.Lidl)+" at Lidl");
console.log();
console.log("Shop for supersoup at "+findCheapestStore(supersoup,stores));
console.log("Shop for cowsoup at "+findCheapestStore(cowsoup,stores));
console.log("Shop for chickensoup at "+findCheapestStore(chickensoup,stores));



