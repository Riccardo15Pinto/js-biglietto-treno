// check connect javascript
console.log("ok js");
// check DOM element
console.log(document.getElementById('age-user'));
console.log(document.getElementById('distance'));
console.log(document.getElementById('price'));
// add prompt ageUser
const ageUser = parseInt( prompt('Quanti anni hai?'))
// check ageUser
console.log(ageUser);
// add prompt distanceUser
const distanceUser = parseInt( prompt('Quanti chilometri vuoi percorrere?'))
// check distanceUser
console.log(distanceUser);
// add totalprice
let price = (distanceUser * 0.21).toFixed(2);
// check price
console.log(price);
// add discount20
let discount20 = ((20 / 100) * price).toFixed(2);
console.log(discount20)
// add discount total
let discountTotal = price - discount20;
// check discountTotal
console.log(discountTotal);
// add discount40
let discount40 = ((40 / 100) * price).toFixed(2);
// check discountTotal
let discountTotal1 = price - discount40;
console.log(discountTotal1);