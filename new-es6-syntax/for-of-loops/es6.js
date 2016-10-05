'use strict'

var categories = ['hardware', 'software', 'vaporware'];
for (var item of categories) {
    console.log(item);
} 
/*  hardware
    software    
    vaporware 
*/

var codes = "ABCDEF";
var count = 0;  
for (var code of codes) {
    count++;
}
console.log(count); //6
