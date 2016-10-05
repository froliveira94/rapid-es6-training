'use strinct'

var price = 5.99, quantity = 10;

var productView = {
    price,
    quantity
};
console.log(productView); //{price: 5.99, quantity: 10}

var productView_a = {
    price,
    quantity,
    calculateValue() {
        return this.price * this.quantity
    }
};
console.log(productView_a.calculateValue()); //59.900000000000006

var productView_b = {
    price: 7.99,
    quantity: 1,
    calculateValue() {
        return this.price * this.quantity
    }
};
console.log(productView_b.calculateValue()); //7.99

var productView_c = {
    price,
    quantity,
    "calculate value" () {
        return this.price * this.quantity
    }
};
console.log(productView_c["calculate value"]()); //59.900000000000006

var field = 'dynamicField'; 
var price = 5.99;
var productView_d = {
    [field + '-001']: price
}
console.log(productView_d); //{dynamicField-001: 5.99}

var method = 'doIt'; 
var productView_e = {
    [method + '-001']() {
        console.log('in a method'); 
    }
};
productView_e['doIt-001'](); //in a method

var ident = 'productId';
var productView_f = {
    get [ident] () {return true;},
    set [ident] (value) { }
};
console.log(productView_f.productId); //true

