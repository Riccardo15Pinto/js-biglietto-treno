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
const price = (distanceUser * 0.21).toFixed(2);
// check price
console.log(price);
// add discount
const discount20 = ((price * 20) / 100);
const discount40 = ((price * 40) / 100);

