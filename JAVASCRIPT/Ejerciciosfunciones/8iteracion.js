/*
Crea una función que nos devuelva el número de veces que se repite cada una de las palabras que lo conforma. 
*/
const counterWords = [
  "code",
  "repeat",
  "eat",
  "sleep",
  "code",
  "enjoy",
  "sleep",
  "code",
  "enjoy",
  "upgrade",
  "code",
];
const arrayfinal = repeatCounter(counterWords);
console.log(arrayfinal);
function repeatCounter(param) {
  const arrayincompleto = [];
  const arrayfinalfunc = [];
  for (const elemento of param) {
    if (!arrayincompleto.includes(elemento)) {
      arrayincompleto.push(elemento);
    }
  }
  for (const elemento of arrayincompleto) {
    let cont = 0;
    for (const elementoarraylargo of param) {
      if (elemento == elementoarraylargo) {
        cont++;
      }
    }
    //console.log(`el elemento ${elemento} aparece ${cont}`);
    arrayfinalfunc.push(`el elemento ${elemento} aparece ${cont}`);
  }
  return arrayfinalfunc;
}
