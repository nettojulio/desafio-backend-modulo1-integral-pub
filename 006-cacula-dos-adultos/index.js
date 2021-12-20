let lista = [15, 17, 8];
let maior = lista.reduce((acc, item) => item > acc ? item : acc);

maior < 18 ? console.log("CRESCA E APARECA") : console.log(lista.filter(x => x >= 18).reduce((acc, item) => item < acc ? item : acc));