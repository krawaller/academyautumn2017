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

var costOfRecipe = function(recipe, store){
  var price = 0;
for (var key in recipe){
  price = price + (recipe[key]*store[key])
}
  return price;
}

console.log("Supersoup costs "+costOfRecipe(supersoup,ICA));
console.log("Sushi costs "+costOfRecipe(sushi,ICA));