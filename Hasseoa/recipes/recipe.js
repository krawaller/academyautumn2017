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

//boutiques

var ICA ={
	potato: 2,
	onion: 1,
	corn: 4,
	cow: 30,
	chicken: 15,
	leek: 3,
}

var Lidl = {
	potato: 1,
	onion: 1,
	corn: 5,
	cow: 28,
	chicken: 12,
	leek: 4,	
}

//funcion
console.log(supersoup.cow);

function priceCalculator(recipe,store){
	var price = 0;
	for(var ingredient in recipe){		
		price += recipe[ingredient]*store[ingredient];
	}
	return price;
}

console.log("supersoup costs "+priceCalculator(supersoup,ICA)+" at ICA");
console.log("cowsoup costs "+priceCalculator(cowsoup,ICA)+" at ICA");
console.log("chickensoup costs "+priceCalculator(chickensoup,ICA)+" at ICA");
console.log("supersoup costs "+priceCalculator(supersoup,Lidl)+" at Lidl");
console.log("cowsoup costs "+priceCalculator(cowsoup,Lidl)+" at Lidl");
console.log("chickensoup costs "+priceCalculator(chickensoup,Lidl)+" at Lidl");



//console.log("Supersoup costs "+costOfRecipe(supersoup,ICA));
//console.log("My famous stew costs "+costOfRecipe(stew,ICA));