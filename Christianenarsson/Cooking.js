var supersoup = {
  potato: 3,
  onion: 1,
  corn: 1,
  carrot: 2,

};

var sushi = {
  rice: 1,
  salmon: 2
 
};

var curry = {
  potato: 1,
  rice: 2,
  chicken: 2,
  carrot: 1
};

var ICA = {
  potato: 3,
  carrot: 6,
  chicken: 12,
  rice: 1,
  salmon: 15,
  onion: 1,
  corn: 4
};

var Willys = {
  potato: 5,
  carrot: 11,
  chicken: 2,
  rice: 10,
  salmon: 22,
  onion: 1,
  corn: 1
};

var Coop = {
  potato: 1,
  carrot: 3,
  chicken: 32,
  rice: 3,
  salmon: 10,
  onion: 5,
  corn: 1
};

var Shops = {
	ICA : ICA,
	Willys: Willys,
	Coop : Coop
}


var costOfRecipe = function(recipe, store){
  var price = 0;
for (var key in recipe){
  price = price + (recipe[key]*store[key]);
}
  return price;
}

console.log("Supersoup costs "+costOfRecipe(supersoup,ICA));
console.log("Sushi costs "+costOfRecipe(sushi,ICA));

var findCheapestStore = function(recipe, shops){
	var cheapestPrice = 100000000;
	var cheapestStore = "";
	for (var affär in shops){
		var price = 0;
		for (var vara in recipe){
 	 		price = price + (recipe[vara] * shops [affär] [vara] );
		}
		if (price<cheapestPrice){
			cheapestStore = affär;
		}
	}
	return cheapestStore;
}

console.log("Supersoup is cheapest at "+findCheapestStore(supersoup,Shops));