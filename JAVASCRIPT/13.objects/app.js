const objeto = {
  clave: "valor",
};

const batman = {
  name: "Batman",
  realName: "Bruce Wayne",
  age: 70,
  city: "Gotham",
  habilities: ["detective", "millonario"],
};

for (const key in batman) {
  console.log(`la clave ${key} tiene como valor ${batman[key]}`);
}

//
