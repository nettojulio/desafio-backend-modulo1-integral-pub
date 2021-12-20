let input = "3\n0 0\n0 3\n4 0";
const linhas = input.trim().split("\n");
let pessoas = parseInt(linhas[0])
let coordenadas = [];
let resultados = [];
let maior = 0;

function distancia(x1, y1, x2, y2) {
    return Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2))
}

for (let x = 1; x < linhas.length; x++) {
    let coord = linhas[x].trim().split(" ");
    coordenadas.push([parseFloat(coord[0]), parseFloat(coord[1])])
}

for (let i = 0; i < pessoas - 1; i++) {
    for (let j = 1; j < pessoas; j++) {
        resultados.push(distancia(coordenadas[i][0], coordenadas[i][1], coordenadas[j][0], coordenadas[j][1]))
    }
}

for (let x = 0; x < resultados.length; x++) {
    if (resultados[x] > maior) {
        maior = resultados[x];
    }
}

console.log(maior);