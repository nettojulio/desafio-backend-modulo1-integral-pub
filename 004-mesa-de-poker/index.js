const min = 1;
const max = 1;
const valores = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let permitidos = valores.filter((x) => {return x >= min && x <= max })

console.log(permitidos);