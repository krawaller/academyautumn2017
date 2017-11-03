// A massive example of the ES2015 feature Destructuring by Jesper Thommy and Mr Krut

let obj = { first: 'Jane', middle: "Sven", last: 'Doe' };
var {first: f, middle: m, last: l} = obj;

console.log(f,m,l)


const arr = ['f', 'm', 'l', ' ', 'l', 'o', 'l'];
for (const [index, element] of arr.entries()) {
    console.log(index, element);
}