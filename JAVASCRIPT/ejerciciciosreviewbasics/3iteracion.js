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
const arraySonidosReducido = [];
const arraySonidos = [];
for (const user of users) {
  for (const favoutessonidos in user.favoritesSounds) {
    arraySonidos.push(favoutessonidos);
    if (!arraySonidosReducido.includes(favoutessonidos)) {
      arraySonidosReducido.push(favoutessonidos);
    }
  }
}
arraySonidosReducido.forEach((sonido) => {
  let count = 0;
  arraySonidos.forEach((element) => {
    if (element == sonido) {
      count++;
    }
  });
  console.log(`el sonido ${sonido} esta añadido ${count} veces`);
});
