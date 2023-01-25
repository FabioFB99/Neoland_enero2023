/*
Usa un bucle for...of para recorrer todos los juguetes y elimina los que incluyan la palabra gato. 
*/

const toys = [
{id: 5, name: 'Buzz MyYear'}, 
{id: 11, name: 'Action Woman'}, 
{id: 23, name: 'Barbie Man'}, 
{id: 40, name: 'El gato con Guantes'},
{id: 40, name: 'El gato felix'}
]
const toysSingato=[]
for (const toy of toys) {
    // con el toUppercase filtramos para que se pueda buscar en todo el texto y este en minusculas y mayusculas
    if (toy.name.toUpperCase().includes("GATO")== false) {
        toysSingato.push(toy)
        //console.log(toy);
    }
}
console.log(toysSingato);