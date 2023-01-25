/* Dado el siguiente javascript usa forof y forin para hacer la media del volumen de todos los sonidos favoritos que tienen los usuarios. */
const users = [
  {
    name: "Manolo el del bombo",
    favoritesSounds: {
      waves: { format: "mp3", volume: 50 },
      rain: { format: "ogg", volume: 60 },
      firecamp: { format: "mp3", volume: 80 },
    },
  },
  {
    name: "Mortadelo",
    favoritesSounds: {
      waves: { format: "mp3", volume: 30 },
      shower: { format: "ogg", volume: 55 },
      train: { format: "mp3", volume: 60 },
    },
  },
  {
    name: "Super Lopez",
    favoritesSounds: {
      shower: { format: "mp3", volume: 50 },
      train: { format: "ogg", volume: 60 },
      firecamp: { format: "mp3", volume: 80 },
    },
  },
  {
    name: "El culebra",
    favoritesSounds: {
      waves: { format: "mp3", volume: 67 },
      wind: { format: "ogg", volume: 35 },
      firecamp: { format: "mp3", volume: 60 },
    },
  },
];
volumentotal = 0;
cont = 0;
for (const user of users) {
  //console.log(user);
  for (const sounds in user.favoritesSounds) {
    //console.log(user.favoritesSounds[sounds].volume);
    volumentotal += user.favoritesSounds[sounds].volume;
    cont++;
  }
}
// codewars soluciones
console.log(volumentotal / cont);
for (let i = 0; i < array.length; i++) {
  const element = array[i];
}

function reverseWords(str) {
  return str.split(" ").reverse().join(" "); // reverse those words
}
// si lo queremos hacer a prueba de bomba le ponemos trim() para que elimine el primer espacio si es un espacio
//str.trim().split(" ").reverse().join(" ")
