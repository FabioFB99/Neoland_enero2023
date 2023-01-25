/*
Crea una función que reciba por parámetro un array y
el valor que desea comprobar que existe dentro de dicho array 
- comprueba si existe el elemento, en caso que existan nos devuelve un true y
la posición de dicho elemento y por la contra un false. 
*/
const nameFinder = [
  "Peter",
  "Steve",
  "Tony",
  "Natasha",
  "Clint",
  "Logan",
  "Xabier",
  "Bruce",
  "Peggy",
  "Jessica",
  "Marc",
];

const namee = "Marc";
const final = finderName(namee, nameFinder);
console.log(elegir(final));
function finderName(param, array) {
  let posicion = 0;
  if (array.includes(param)) {
    //consol.log()
    for (let i = 0; i < array.length; i++) {
      if (array[i] == param) {
        posicion = i;
      }
    }
  }
  return posicion;
}
function elegir(param) {
  if (typeof param === "number") {
    console.log(`el nombre ${namee} esta en la posicion ${param}`);
  }
}
