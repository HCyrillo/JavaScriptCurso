const arrayOriginal = [7, 7, 8, 9];

function alteraArray(array) {
 const novoArray=[...array,10];

  console.log(`Novo Array é ${novoArray}`);
  console.log(`arrayOriginal é ${arrayOriginal}`);
}

alteraArray(arrayOriginal);