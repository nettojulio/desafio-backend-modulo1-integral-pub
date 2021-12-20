let precos = [100, 100, 1];
let menor = precos.reduce((acc, item) => item < acc ? item : acc);
let total = precos.reduce((acc, cur) => acc += cur);
let desconto = precos.length > 2 ? 0.5 : 0;

console.log(total - (desconto * menor));