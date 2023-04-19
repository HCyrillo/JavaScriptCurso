let telefone = 12341234;
console.log("O telefone é " + String(telefone)); 
// teremos a conversão do número 12341234 para uma string “12341234” 
//e assim poderemos fazer a concatenação entre as strings
//==================
let telefoneOutraForma = 12341234;
console.log("O telefone é " + telefone.toString()); 
// o .toString() é uma outra forma para  fazer essa conversão, 
//que é mais parecida com outras linguagens de programação.
//==================
let usuarioConectado = false;
console.log(String(usuarioConectado)); 
// teremos a conversão da booleana para string, 
//nesse caso teremos uma string “false”.
//==================
usuarioConectado = true;
console.log(String(usuarioConectado)); 
// agora teremos uma string “true”.
//==================
// Vamos calcular a área de um retângulo
let largura = "10";
let altura = "5";
console.log(Number(largura) * Number(altura)); 
// teremos a conversão de String para números, 
//possibilitando a realização da multiplicação