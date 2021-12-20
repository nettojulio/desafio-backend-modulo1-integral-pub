const texto = "Cuidado, pois usuarios as vezes deixam espacos vazios no fim do texto sem querer ";
let tratamento = texto.trim();

tratamento = tratamento.split(" ").filter(Boolean);

console.log(tratamento.length);