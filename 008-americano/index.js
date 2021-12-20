let numeros = [1, 3, 2, 1]

let soma = numeros.reduce((acc, cur) => acc += cur) 
let posicao = soma % numeros.length === 0 ? numeros.length : soma % numeros.length;

console.log(posicao);