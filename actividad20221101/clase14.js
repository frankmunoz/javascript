const edades = [11, 12, 15, 18, 25, 22, 10, 33, 18, 5]

// a. Obtener en un nuevo array las edades menores a 18

let menor18 = (array) =>{
    let arrayNuevo = []
    for(let i = 0; i < array.length; i++){
        if(array[i]<18){
            arrayNuevo.push(array[i])
        }
    }
    return arrayNuevo
}

console.log(menor18(edades))

// b. Obtener en un nuevo array las edades mayor o igual a 18

let mayoro18 = (array) =>{
    let arrayNuevo = []
    for(let i = 0; i < array.length; i++){
        if(array[i] >= 18){
            arrayNuevo.push(array[i])
        }
    }
    return arrayNuevo
}

console.log(mayoro18(edades))

// c. Obtener en un nuevo array las edades igual a 18

let edad18 = (array) =>{
    let arrayNuevo = []
    for(let i = 0; i < array.length; i++){
        if(array[i] == 18){  // Recordar que cuando se pone un solo igual estamos haciendo una asignacion para que haya comparacion deben haber al menos 2 iguales
            arrayNuevo.push(array[i])
        }
    }
    return arrayNuevo
}

console.log(edad18(edades))

// d. Obtener el menor.

let edadMenor = (array) => {
    let cajita = array[0]
    for(let i=0; i<array.length; i++){
        if(array[i] < cajita){
            cajita = array [i]
        }
    }
    return cajita
}

// d. Obtener el mayor.

console.log(edadMenor(edades))

let edadMayor = (array) => {
    let cajita = array[0]
    for(let i=0; i<array.length; i++){
        if(array[i] > cajita){
            cajita = array [i]
        }
    }
    return cajita
}

console.log(edadMayor(edades))

// f. Obtener el promedio de edades.

let promedioEdades = (array) => {
    let cajita = 0
    for(i=0; i<array.length; i++){
        cajita = array[i] + cajita
    }
    return cajita/array.length
}

console.log(promedioEdades(edades))

//g. Incrementar en 1 todas las edades.

let incrementar1 = (array) =>{
    for(i=0; i<array.length; i++){
        array[i] = array[i] + 1
    }
    return array
}

console.log(incrementar1(edades))

const arrayCuentas = [
{
titular: "Arlene Barr",
estaHabilitada: false,
saldo: 3253.40,
edadTitular: 33,
tipoCuenta: "sueldo"
},
{
titular: "Roslyn Torres",
estaHabilitada: false,
saldo: 3229.45,
edadTitular: 27,
tipoCuenta: "sueldo"
},
{
titular: "Cleo Lopez",
estaHabilitada: true,
saldo: 1360.19,
edadTitular: 34,
tipoCuenta: "corriente"
},
{
titular: "Daniel Malone",
estaHabilitada: true,
saldo: 3627.12,
edadTitular: 30,
tipoCuenta: "sueldo"
},
{titular: "Ethel Leon",
estaHabilitada: true,
saldo: 1616.52,
edadTitular: 34,
tipoCuenta: "sueldo"
},
{
titular: "Harding Mitchell",
estaHabilitada: true,
saldo: 1408.68,
edadTitular: 25,
tipoCuenta: "corriente"
}
]

//a. Obtener un nuevo array de cuentas cuyas edades sean menores a 30.

let menores30 = (array) => {
    let nuevoArray= []
    for (let i = 0; i < array.length; i++) {
        if (array[i].edadTitular < 30) {
            nuevoArray.push(array[i])            
        }
    }
    return nuevoArray
}

console.log(menores30(arrayCuentas))

//b. Obtener un nuevo array de cuentas cuyas edades sean mayor o igual a 30.

let mayores30 = (array) => {
    let nuevoArray= []
    for (let i = 0; i < array.length; i++) {
        if (array[i].edadTitular >= 30) {
            nuevoArray.push(array[i])            
        }
    }
    return nuevoArray
}

console.log(mayores30(arrayCuentas))

// c. Obtener un nuevo array de cuentas cuyas edades sean menores o igual a 30.

let menoresIgual30 = (array) => {
    let nuevoArray= []
    for (let i = 0; i < array.length; i++) {
        if (array[i].edadTitular <= 30) {
            nuevoArray.push(array[i])            
        }
    }
    return nuevoArray
}

console.log(menoresIgual30(arrayCuentas))

// d. Obtener la cuenta con el titular de la misma más joven.

let menorEdad = (array) => {
    let cajita = array[0]
    for (let i = 1; i < array.length; i++) {
        if (array[i].edadTitular < cajita.edadTitular) {
            cajita = array[i]
        }
    }
    return cajita
}

console.log(menorEdad(arrayCuentas))

// e. Obtener un array con las cuentas habilitadas.

let cuentaHabilitada = (array) => {
    let nuevoArray= []
    for (let i = 0; i < array.length; i++) {
        if (array[i].estaHabilitada === true) {
            nuevoArray.push(array[i])            
        }
    }
    return nuevoArray
}

console.log(cuentaHabilitada(arrayCuentas))

// f. Obtener un array con las cuentas deshabilitadas.

let cuentaNoHabilitada = (array) => {
    let nuevoArray= []
    for (let i = 0; i < array.length; i++) {
        if (array[i].estaHabilitada !== true) {
            nuevoArray.push(array[i])            
        }
    }
    return nuevoArray
}

console.log(cuentaNoHabilitada(arrayCuentas))

// g. Obtener la cuenta con el menor saldo.

let menorSaldo = (array) => {
    let cajita = array[0]
    for (let i = 1; i < array.length; i++) {
        if (array[i].saldo < cajita.saldo) {
            cajita = array[i]
        }
    }
    return cajita
}

console.log(menorSaldo(arrayCuentas))

// h. Obtener la cuenta con el mayor saldo. 

let mayorSaldo = (array) => {
    let cajita = array[0]
    for (let i = 1; i < array.length; i++) {
        if (array[i].saldo > cajita.saldo) {
            cajita = array[i]
        }
    }
    return cajita
}

console.log(mayorSaldo(arrayCuentas))




