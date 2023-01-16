/* Crea una función llamada swap() que reciba un array y dos parametros que sean indices del array. La función deberá intercambiar la posición de los valores de los indices que hayamos enviado como parametro. */

arrayNombres = [
  "Mesirve",
  "Cristiano Romualdo",
  "Fernando Muralla",
  "Ronalguiño",
];
function swap(array, param1, param2) {
  arrayfinal = [];
  valorparam1 = valorarray(array, param1);
  valorparam2 = valorarray(array, param2);
  for (let i = 0; i < array.length; i++) {
    if (i === param2) {
      arrayfinal.push(valorparam1);
    } else if (i === param1) {
      arrayfinal.push(valorparam2);
    } else {
      arrayfinal.push(array[i]);
    }
  }
  return arrayfinal;
}
function valorarray(array, param) {
  valor = "";
  for (let i = 0; i < array.length; i++) {
    if (param == i) {
      valor = array[i];
      return valor;
    }
  }
}
console.log(arrayNombres);
console.log(swap(arrayNombres, 0, 3));
