let monos = [{nombre:'Pocho', apellido: 'Orozco'},
            {nombre:'Toto', apellido: 'Lepers'},
            {nombre:'Cholo', apellido: 'Orozco'},
            {nombre: 'Tom', apellido: 'Orozco'},
            {nombre:'Moncho', apellido: 'Orozco'},
            {nombre:'Rodolfo',apellido: 'Orozco'},
            {nombre:'Otto',apellido: 'Orozco'},
            {nombre:'Pololo',apellido: 'Orozco'}];

console.log(monos);
console.log(monos.length);

// buscar nombre y apellido  FORECH

monos.forEach(mono => {
    console.log(mono.nombre);
    console.log(mono.apellido);
});


//filtrando solamente a los orozcos    FILTER
let Orozcos=monos.filter(Orozco =>Orozco.apellido == "Orozco");
console.log(Orozcos);

// arreglo de nombre y apellido

let test = Orozcos.map(Orozco =>Orozco.nombre + " " +"Orozcos");
console.log(test);


// Hola pocho orozcos

let saludo = Orozcos.map(Orozco =>"Hola "+ Orozco.nombre + " " +"Orozcos");
console.log(saludo);