// guarda las personas que han aprobado al menos dos trims 
const alumns = [
    {name: 'Pepe Viruela', T1: false, T2: false, T3: true}, 
		{name: 'Lucia Aranda', T1: true, T2: false, T3: true},
		{name: 'Juan Miranda', T1: false, T2: true, T3: true},
		{name: 'Alfredo Blanco', T1: false, T2: false, T3: false},
		{name: 'Raquel Benito', T1: true, T2: true, T3: true}
]
const alumnosTop = [];
for (const alumno of alumns) {
    if (alumno.T1==true && alumno.T2==true || alumno.T1==true && alumno.T3==true || alumno.T3==true && alumno.T2==true  ) {
        alumnosTop.push(alumno.name)
    }
}
console.log(alumnosTop)