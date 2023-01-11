/*
Calcular un promedio
*/
const numbers = [12, 21, 38, 5, 45, 37, 6];
let total = 0; 
let count = 0; 

let final = average(numbers);
console.log(final);


function average(numeros) {
  for (let i = 0; i < numeros.length; i++) {
      total += numeros[i];
      count++;
    
    }
    total /= count; 
    return total;
}