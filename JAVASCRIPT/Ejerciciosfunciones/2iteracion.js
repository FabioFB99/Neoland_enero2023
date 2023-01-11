/*
Completa la función que tomando un array de strings como argumento devuelva el más largo,
 en caso de que dos strings tenga la misma longitud deberá devolver el primero.
*/
const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];
let mayor = 0;
let herore = "";
function findLongestWord(param) {
  avengers.forEach(vengador => {
    //console.log(vengador.length);
      if (vengador.length > mayor) {
          mayor = vengador.length; 
        herore = vengador;
        //console.log(herore);
    }
  });
    return herore;
}
let final = findLongestWord(avengers);
console.log(final);

