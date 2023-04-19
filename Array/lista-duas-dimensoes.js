const alunos = ["João", "Juliana", "Ana", "Caio"];
const medias = [10, 8, 7.5, 9];

const listaDeAlunosEMedias = [alunos, medias];

console.log(
  `A aluna da posição 1 da lista de alunos é: ${listaDeAlunosEMedias[0][1]}.
  A nota dessa aluna é ${listaDeAlunosEMedias[1][1]}
  `
);
//Ao chamar um item de uma matriz(array de duas dimensões), deve-se chamar:
//nomeDoArray[ArrayEscolhido][PosicaoItemArrayEscolhido];