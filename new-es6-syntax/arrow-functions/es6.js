'use strict'

var getPrice = () => 5.99;
console.log(typeof getPrice); //function
console.log(getPrice()); //5.99
console.log(getPrice.hasOwnProperty("prototype"));

var getPrice_a = count => count * 4.00;
console.log(getPrice_a(2)); //8.00

var getPrice_b = (count, tax) => count * 4.00 * (1 + tax);
console.log(getPrice_b(2, .07)); //8.56

var getPrice_c = (count, tax) => {
    var price = count * 4.00;
    price *= (1 + tax);
    return price;
};
console.log(getPrice_c(2, .07)); //8.56

document.addEventListener('click', () => console.log(this)); //Window {...}

var invoice = { 
    number: 123,
    process: function() {
        return () => console.log(this.number);
    }
};
invoice.process()(); //123

var newInvoice = {
    number: 456
};
invoice.process().bind(newInvoice)(); //123
invoice.process().call(newInvoice); //123
