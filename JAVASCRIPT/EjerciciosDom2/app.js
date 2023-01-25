/* 2.1 Inserta dinamicamente en un html un div vacio con javascript.*/
const mybox = document.createElement("div");
document.body.appendChild(mybox);
//console.log(mybox);
/*2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.*/
//const ps = document.createElement("p");
//mybox.appendChild(ps);
//console.log(mybox);
/*2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.*/

for (let i = 0; i < 5; i++) {
  const i = document.createElement("p");
  mybox.appendChild(i);
}
//console.log(mybox);

/*2.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.*/

let nuevoParrafo = document.createElement("p");
let textoParrafo = document.createTextNode("Soy dinamico");
document.body.appendChild(nuevoParrafo);
//nuevoParrafo.innerHTML = textoParrafo.nodeValue; asi tabien sale el texto
nuevoParrafo.appendChild(textoParrafo);
/*2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.*/
let hdos = document.querySelector(`h2[fn-insert-here]`);
const texto = "Wubba Lubba dub dub";
console.log(hdos);
hdos.appendChild(texto);
/*2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

2.7 Elimina todos los nodos que tengan la clase .fn-remove-me

2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. 
	Recuerda que no solo puedes insertar elementos con .appendChild.

2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here */
