function rollDice(param1, param2) {
  paramaux = 0;
  let dado = 0;
  if (param1 > param2) {
    paramaux = param1;
    param1 = param2;
    param2 = paramaux;
    dado = numaleat(param1, param2);
    return console.log(
      `Los valores de los dados maximos es de ${param1} y ${param2} y el resultado es ${dado}`
    );
  } else if (param1 == param2) {
    return console.log(`el valor maximo y minimo es el mismo y es ${param1}`);
  } else if (param1 < param2) {
    dado = numaleat(param1, param2);
    return console.log(
      `Los valores de los dados maximos es de ${param1} y ${param2} y el resultado es ${dado}`
    );
  }
}
function numaleat(param1, param2) {
  return Math.round(Math.random() * (param2 - param1) + param1);
}
rollDice(1, 5);
rollDice(5, 5);
rollDice(5, 1);
