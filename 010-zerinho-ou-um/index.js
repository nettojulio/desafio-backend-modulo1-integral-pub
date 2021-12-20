const jogadores = [
    {
        "nome": "Herman",
        "jogada": 1
    },
    {
        "nome": "Rhodes",
        "jogada": 1
    },
    {
        "nome": "Beach",
        "jogada": 1
    },
    {
        "nome": "Laurel",
        "jogada": 0
    },
    {
        "nome": "Beatrice",
        "jogada": 1
    },
    {
        "nome": "Alison",
        "jogada": 1
    },
    {
        "nome": "Saundra",
        "jogada": 1
    },
    {
        "nome": "Klein",
        "jogada": 1
    }
]


let jogada0 = jogadores.filter(x => x.jogada === 0);
let jogada1 = jogadores.filter(x => x.jogada === 1);
let ganhador = "";

if (jogada0.length === 1){
    ganhador = jogadores.filter(x => x.jogada === 0)
} else if (jogada1.length === 1) {
    ganhador = jogadores.filter(x => x.jogada === 1)
}

jogada0.length === 1 || jogada1.length === 1 ? console.log(`${ganhador[0].nome}`) : console.log("NINGUEM")