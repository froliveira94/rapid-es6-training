'use strict'

var showCategories = function(productId, ...categories) {
    console.log(categories instanceof Array);
    console.log(categories);
};
showCategories(123, 'search', 'advertising'); //['search', 'advertising']


var showCategories_a = function(productId, ...categories) {
    console.log(categories);
};
showCategories_a(123); //[]

var showCategories_b = function(productId, ...categories) {
};
console.log(showCategories_b.length); //1

var showCategories_c = function(productId, ...categories) {
    console.log(arguments.length)
};
showCategories_c(123, 'search', 'advertising'); //3

var showCategories_d = 
    new Function('...categories', 'return categories;');
console.log(showCategories_d('search', 'advertising')); //['search', 'advertising']

var prices = [12, 20, 18];
var maxPrice = Math.max(...prices); 
var newPriceArray = [...prices];
console.log(maxPrice); //20
console.log(newPriceArray); //[12, 20, 18]

var newPriceArray_a = Array(...[,,]);
console.log(newPriceArray_a); //[undefined, undefined]

var maxCode = Math.max(..."43210");
console.log(maxCode); //4

var codeArray = ["A", ..."BCD", "E"];
console.log(codeArray);

   

