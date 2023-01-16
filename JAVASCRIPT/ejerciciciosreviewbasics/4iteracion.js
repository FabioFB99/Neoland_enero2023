arrayNombres = ["Caracol", "Mosquito", "Salamandra", "Ajolote"];
function findArrayIndex(array, text) {
  let posicion = 0;
  for (let i = 0; i < array.length; i++) {
    if (text.toLowerCase() == array[i].toLowerCase()) {
      posicion = i;
    }
  }
  return posicion;
}
console.log(findArrayIndex(arrayNombres, "Ajolote"));
