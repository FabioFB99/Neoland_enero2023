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
  const li = document.createElement("p");
  mybox.appendChild(li);
}
//console.log(mybox);

/*2.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.*/

let nuevoParrafo = document.createElement("p");
let textoParrafo = document.createTextNode("Soy dinamico");
document.body.appendChild(nuevoParrafo);
//nuevoParrafo.innerHTML = textoParrafo.nodeValue; asi tabien sale el texto
nuevoParrafo.appendChild(textoParrafo);
/*2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.*/
const text = document.querySelector(".fn-insert-here");
text.textContent = "Wubba Lubba dub dub";
//revisar
/* const text = document.querySelector(".fn-insert-here");
text.innerText = "Wubba Lubba dub dub"; */
/*2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.*/
const apps = ["Facebook", "Netflix", "Instagram", "Snapchat", "Twitter"];
const mybox2 = document.createElement("div");
const boxul = document.createElement("ul");
document.body.appendChild(mybox2);
mybox2.appendChild(boxul);
for (let i = 0; i < apps.length; i++) {
  const element = apps[i];
  const li = document.createElement("li");
  li.textContent = element;
  boxul.appendChild(li);
}

/*2.7 Elimina todos los nodos que tengan la clase .fn-remove-me

2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. 
	Recuerda que no solo puedes insertar elementos con .appendChild.

2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here */
