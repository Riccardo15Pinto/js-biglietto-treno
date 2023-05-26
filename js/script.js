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
// add discount40
let discount40 = ((40 / 100) * price).toFixed(2);

let discountTotal = price ;

if(ageUser < 18 ){
    discountTotal = (price - discount20).toFixed(2);
}else if (ageUser > 65){
    discountTotal = (price - discount40).toFixed(2);
}

console.log(discountTotal)
document.getElementById("age-user").innerText = "La tua età è:" +" "+ ageUser + "anni";
document.getElementById("distance").innerText = "Il tragitto che vuoi percorrere è di:" +" "+ distanceUser + "Km";
document.getElementById("price").innerText = "Il costo del tuo biglietto è di:" + " " + discountTotal + "€";