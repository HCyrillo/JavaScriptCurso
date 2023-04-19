const arrayNums = [1, 2, 3, 4];

//Callback (.map) função externa sem arrow function 
/*function multiplicaPorDez(num) {
    return num * 10;
   }

const arraySomada = arrayNums.map(multiplicaPorDez);

console.log(arraySomada);*/

//Callback (.map) com arrow function
const arraySomada = arrayNums.map(num => num * 10);
console.log(arraySomada);