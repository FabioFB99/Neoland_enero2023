/*
Crea una función que reciba por parámetro un array y compruebe si existen elementos duplicados, en caso que existan los elimina para retornar un array sin los elementos duplicados.
*/
const duplicates = [
  "sushi",
  "pizza",
  "burger",
  "potatoe",
  "pasta",
  "ice-cream",
  "pizza",
  "chicken",
  "onion rings",
  "pasta",
  "soda",
];
const final = removeDuplicates(duplicates);
console.log(final);

function removeDuplicates(array) {
  const array2 = [];
  for (const posicion of array) {
    if (!array2.includes(posicion)) {
      array2.push(posicion);
    }
  }
  return array2;
}
