/* 1.1 Usa querySelector para mostrar por consola el botón con la clase .showme*/
const mybutton = document.querySelector(".showme");
console.log(mybutton);
/*1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado*/
const myH1 = document.querySelector("#pillado");
console.log(myH1);
/*1.3 Usa querySelector para mostrar por consola todos los p*/
const allp = document.querySelectorAll("p");
allp.forEach((ps) => {
  console.log(ps.innerHTML);
});

/*1.4 Usa querySelector para mostrar por consola todos los elementos con la clase.pokemon*/
const allpoke = document.querySelectorAll(".pokemon");
allpoke.forEach((poke) => {
  console.log(poke.innerHTML);
});
//innerhtml
/*1.5 Usa querySelector para mostrar por consola todos los elementos con el atributo 
data-function="testMe".*/
const testsmes = document.querySelectorAll(`span[data-function="testMe"]`);
testsmes.forEach((tm) => {
  console.log(tm.innerHTML);
});
/*1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo 
data-function="testMe". */
const testsmes2 = document.querySelectorAll(`span[data-function="testMe"]`);
for (let i = 0; i < testsmes2.length; i++) {
  const element = testsmes2[i];
  if (i == 2) {
    console.log(element.innerHTML);
  }
}
