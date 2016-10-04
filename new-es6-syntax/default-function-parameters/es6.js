'use strict'

var getProduct = function(productId = 1000) {
    console.log(productId);
};
getProduct(); //1000

var getProduct_a = function(productId = 1000, type = 'software') {
    console.log(productId + ', ' + type);
}
getProduct_a(undefined, 'hardware'); //1000, hardware

var getTotal = function(price, tax = price * 0.07) {
    console.log(price + tax);
}
getTotal(5.00); //5.35

var baseTax = 0.07;
var getTotal_a = function(price, tax = price * baseTax) {
    console.log(price + tax);
};
getTotal_a(5.00); //5.35

var generateBaseTax = () => 0.07;
var getTotal_b = function(price, tax = price * generateBaseTax() ) {
    console.log(price + tax);
};
getTotal_b(5.00); //5.35

var getTotal_c = function(price, tax = 0.07 ) {
    console.log(arguments.length);
};
getTotal_c(5.00); //1

var getTotal_d = function(price = adjustment, adjustment = 1.00) {
    console.log(price + adjustment);
};
//getTotal_d(); //SytaxError: Use before declaration

var getTotal_e = function(price = adjustment, adjustment = 1.00) {
    console.log(price + adjustment);
};
getTotal_e(5.00); //6

var getTotal_f = new Function("price = 20.00", "return price;");
console.log(getTotal_f());

