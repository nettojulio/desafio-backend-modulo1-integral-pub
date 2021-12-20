let min = 25, km = 11.5;

let minAdicional = min > 20 ? min - 20 : 0;
let kmAdicional = km > 10 ? km - 10 : 0;
let custoMin = (min - minAdicional) * 50 + minAdicional * 30;
let custoKm = (km - kmAdicional) * 70 + kmAdicional * 50;

console.log(custoMin + custoKm);