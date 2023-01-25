const character = {
  name: "peter",
  surname: "parker",
};
// para tener ver si tiene la propiedad
character.hasOwnProperty("age");
// nos devolveria false
const objectconstructor = {
  quote: function () {
    return "hola soy un super hero";
  },
};
const superhero = (name, realname) => {
  const superheroe = Object.create(objectconstructor);
  superheroe.name = name;
  superheroe.realname = realname;
  return superheroe;
};

const spiderman = superhero("spiderman", "peter parker");

// class
class Character {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  attack() {
    return `${this.name} esta atacando`;
  }
  defense() {
    return `${this.name} esta defendiendose`;
  }
}

const Daredevil = new Character("daredevil", 38);
