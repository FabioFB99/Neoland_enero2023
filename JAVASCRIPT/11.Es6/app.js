const superheroes = [
  {
    name: "wolverine",
    type: "mutant",
    power: 65,
  },
  {
    name: "Hulk",
    type: "human",
    power: 80,
  },
  {
    name: "Magneto",
    type: "mutant",
    power: 90,
  },
  {
    name: "Iron Man",
    type: "human",
    power: 100,
  },
];

// Necesito generar un nuevo array de objetos que en el type sea human
//

const superheroreSpecies = superheroes.map((superheroe) => ({
  name: superheroe.name,
  specie: superheroe.type,
  power: superheroe.power,
}));
// filtrar por mutantes
const mutants = superheroreSpecies.filter(
  (mutant) => mutant.specie === "mutant"
);

// el total de power de los mutants

const totalMutantPower = mutants.reduce(
  (accumulador, mutant) => accumulador + mutant.power,
  0
);

// hacerlo todo de una
/* const totalspeciemutantpower = superheroes.map((superheroe) => ({
    name: superheroe.name,
    specie: superheroe.type,
    power: superheroe.power
})).filter((superheroe) => superheroe.specie === "mutant").reduce((accumulador, mutant) => accumulador + mutant.power, 0); */
