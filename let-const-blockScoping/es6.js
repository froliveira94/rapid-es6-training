'use strict'

//let, const and block scoping

let productId = 12;
{
    let productId = 2000;
}
console.log(productId); //12

let updateFunctions = [];
for(let i = 0; i < 2; i++) {
    updateFunctions.push(function(){ return i});
}
console.log(updateFunctions[0]()); //0

const MARKUP_PCT = 100;
console.log(MARKUP_PCT); //100

const MARKUP_PCA = 100;
if(MARKUP_PCA > 2) {
    const MARKUP_PCA = 10;
}
console.log(MARKUP_PCA); //100