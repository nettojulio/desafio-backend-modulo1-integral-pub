![](https://i.imgur.com/xG74tOh.png)

# Zerinho ou Um

Quando precisa-se escolher apenas uma pessoa aleatoriamente dentro de um grupo, é comum jogar "zerinho ou um" para sortear alguém. O jogo é muito simples: cada jogador joga 0 ou 1 com as mão. Aquele que for o único(a) a jogar zero ou um é o sorteado. Faça um programa que imprima o nome da pessoa que foi sorteada, ou `NINGUEM`, caso ninguém tenha sido sorteado(a).

__Input Format__

A entrada será sempre um vetor de objetos chamado `jogadores`, em que cada objeto é uma pessoa, com o seguinte formato:

```
{
    nome: "Herbert",
    jogada: 0 //será sempre 0 ou 1
}
```

__Constraints__

Pode-se assumir que sempre haverá pelo menos 3 pessoas jogando, ou seja, a entrada será sempre um vetor com pelo menos 3 itens. Você não precisa fazer nenhum código para checar isso.

__Output Format__

Imprima na tela o nome do jogador que foi sorteado.

__Sample Input 0__

```
[
  {
    "nome": "Herman",
    "jogada": 1
  },
  {
    "nome": "Rhodes",
    "jogada": 0
  },
  {
    "nome": "Beach",
    "jogada": 0
  },
  {
    "nome": "Laurel",
    "jogada": 0
  },
  {
    "nome": "Beatrice",
    "jogada": 0
  },
  {
    "nome": "Alison",
    "jogada": 0
  },
  {
    "nome": "Saundra",
    "jogada": 0
  },
  {
    "nome": "Klein",
    "jogada": 0
  }
]
```

__Sample Output 0__

```
Herman
```
