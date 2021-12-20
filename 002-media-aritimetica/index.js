let lista = [2, 3, 4];

let valor = lista.reduce((acc, cur) => acc += cur);
valor = valor / lista.length;

console.log(valor);