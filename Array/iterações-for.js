//*forEach() para trabalhar com arrays da forma mais corriqueira 
//- percorrendo do primeiro ao último elemento, sem alterar a condição de parada, 
//e também para manter a coesão do estilo quando em conjunto com outros métodos de array como map,
// filter e etc;
const listaForEach = [1, 2, 3, 4, 5];
let somaForEach = 0;

//Utilizando ArrowFunction
lista.forEach(numero => somaForEach += numero);
console.log(somaForEach) //Resultado : 15

lista.forEach(numero => {
    somaForEach += numero
   });//Forma extensa, mas mais legível

//function normal
lista.forEach(function (numero) {
    somaForEach += numero
});


//*for…of em caso de iteráveis (dicionários, conjuntos e outras estruturas de dados) ou de arrays 
//quando for necessário o uso de programação assíncrona e/ou dar condições de saída do laço 
//(por exemplo, com o uso de break);
const listaForOf = [1, 2, 3, 4, 5];
let somaForOf = 0;

for (let elemento of lista) {
    somaForOf += elemento;
}

console.log(soma) //15
//*for para casos em que seja necessário manipular de forma mais fina as fases do laço 
//(condição inicial, condição de parada e incremento).

const listaFor = [1, 2, 3, 4, 5];

for (let indice = 0; indice < listaFor.length; indice++) {
    console.log(listaFor[indice]);
}