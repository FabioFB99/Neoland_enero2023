/*
Crea una función que reciba por parámetro un array y cuando es un valor number lo sume y
 de lo contrario cuente la longitud del string y lo sume. Puedes usar este array para probar tu función:
*/

const mixedElements = [6, 1, "Rayo", 1, "vallecano", "10", "upgrade", 8, "hub"];

total = averageWord(mixedElements);
console.log(total);

// por que por separado funciona y juntos no¿?
function averageWord(array) {
  let suma = 0;
  for (let i = 0; i < array.length; i++) {
    //console.log(typeof(array[i]));
    if (typeof array[i] === "number") {
      suma += array[i];
      console.log(suma);
    }
    if (typeof array[i] === "string") {
      suma += array[i].length;
      console.log(suma);
    }
  }
  return suma;
}
