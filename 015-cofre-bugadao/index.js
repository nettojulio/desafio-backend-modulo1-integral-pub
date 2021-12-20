findError("cubos\ncuggbyos");
findError("cubos\newvelrabsocaeln");

function findError(input) {
    let senha = input.substr(0, input.indexOf("\n")).trim();
    let digitacao = input.substr(input.indexOf("\n") + 1).trim();
    let formado = "";
    const tamanho = digitacao.length;

    for (x = 0; x < tamanho; x++) {
        if (digitacao.includes(senha[x])) {
            formado += digitacao[digitacao.indexOf(senha[x])];
            digitacao = digitacao.substr(digitacao.indexOf(senha[x]) + 1);
        } else if (!digitacao.includes(senha[x])) {
            break;
        }
    }
    formado === senha ? console.log("SIM") : console.log("NAO");
}