const jogadas = [{
    virada: "Q",
    manilha: "J"
},
{
    virada: "J",
    manilha: "K"
},
{
    virada: "K",
    manilha: "A"
},
{
    virada: "A",
    manilha: "2"
},
{
    virada: "2",
    manilha: "3"
},
{
    virada: "3",
    manilha: "Q"
}
]

let carta = "";
let manilha = jogadas.filter(x => x.virada === carta);

console.log(manilha[0].manilha);