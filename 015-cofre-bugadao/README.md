![](https://i.imgur.com/xG74tOh.png)

# Cofre Bugadão

Um novo cofre foi desenvolvido com a mais moderna tecnologia em segurança e criptografia. Na porta o cofre contém um teclado com todas as letras do alfabeto em que a pessoa pode digitar a senha predefinida para abrir a porta.

Durante alguns testes de rotina foi descoberto um bug uma funcionalidade na hora de validar a senha: O cofre ignora letras erradas durante a digitação da senha, desde que todas as letras da senha tenham sido digitadas na ordem correta.

Por exemplo, se a senha for “cubos” e for digitado “cuggbyos”, o cofre irá abrir.

__Input Format__

A entrada consistirá em duas linhas, na primeira linha estará a senha correta, de até S caracteres. Na segunda linha estará a palavra digitada pela pessoa, de até N caracteres.

__Constraints__

S ≤ 10^3 N ≤ 10^5

__Output Format__

Imprima “SIM” caso o cofre abra. Caso contrário, imprimir “NAO”.

__Sample Input 0__

```
cubos
cuggbyos
```

__Sample Output 0__

```
SIM
```

__Sample Input 1__

```
cubos
ewvelrabsocaeln
```

__Sample Output 1__

```
NAO
```
