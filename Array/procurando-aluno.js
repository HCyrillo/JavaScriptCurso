const alunos = ["João", "Juliana", "Ana", "Caio"];
const medias = [10, 8, 7.5, 9];

const listaDeAlunosEMedias = [alunos, medias];

function exibirNomeNotaAluno(aluno) {
    const [alunos, medias] = listaDeAlunosEMedias;
    if (alunos.includes(aluno)) {
        const indice = alunos.indexOf(aluno);
        const mediaAluno = medias[indice];
        console.log(`${aluno} tem a média ${mediaAluno}.`);
    }else{
        console.log("Aluno não Encotrado");
    }
}

exibirNomeNotaAluno("Caio");