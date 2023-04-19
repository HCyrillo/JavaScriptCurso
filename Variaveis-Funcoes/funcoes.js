//Sem parametro e sem retorno
function cumprimentar() {
    console.log('oi gente!')
}

cumprimentar()

//==================
//Com parametro e sem retorno
function cumprimentaPessoa(pessoa) {
    console.log(`${cumprimentar()} Meu nome é ${nomePessoa}`)
}

//==================
cumprimentaPessoa('Paula') // “Oi gente! Meu nome é Paula”
//==================
//Funcao com return e mais de um parametro
function operacaoMatematica(numero1, numero2, numero3) {
    return numero1 + numero2 + numero3
   }
   
   operacaoMatematica(15, 30, 45) // 90
