//---------------------------------------------
//Ejercicio 1:
//---------------------------------------------
//Desarrollar una función que reciba tres numeros por parámetros.
function operar(primero, segundo, tercero) {
    if(primero > segundo){
        //Si el primero es mayor que el segundo, debe retornar la multiplicación del segundo por el tercero.
        return segundo * tercero;
    }else if(segundo % 2 === 0){
        //Si el segundo es par, que retorne él doble del tercero.*/ 
        return tercero * 2;
    }else{
        return 'No satisface ninguna condición';
    }
}

//Prueba Ejercicio 1
console.log(operar(9, 5, 10)); // Resultado: 50
console.log(operar(2, 4, 10)); // Resultado: 20
console.log(operar(2, 5, 10)); // Resultado: No satisface ninguna condición

//---------------------------------------------
//Ejercicio 2:
//---------------------------------------------
//Desarrollar una función que reciba un array de números por parámetro
function extraerParesMenoresA18(arrayNumeros){
    //Retornar un nuevo array de los numeros que sean pares y menores a 18
    let arrayParesMenoresA18 = []
   
    for (let i = 0; i < arrayNumeros.length; i++) {
        if (arrayNumeros[i] % 2 === 0 && arrayNumeros[i] < 18) {
            arrayParesMenoresA18.push(arrayNumeros[i]);
        }
    }
    return arrayParesMenoresA18;
}

//Prueba Ejercicio 2
let arrayNumeros = [10, 9, 8, 22, 55, 80, 5, 63, 29, 9, 2, 4, 6, 20];
console.log(extraerParesMenoresA18(arrayNumeros));

//---------------------------------------------
//Ejercicio 3:
//---------------------------------------------
//Dado el siguiente array de objetos:
let autos = [ 
    {
        marca: 'Toyota',
        anio: 2022,
        color: 'rojo'
    }, {
        marca: 'Renault',
        anio: 2020,
        color: 'negro'
    }, {
        marca: 'Peugeot',
        anio: 2021,
        color: 'rojo'
    }, {
        marca: 'Fiat',
        anio: 2019,
        color: 'negro'
    }
];

//---------------------------------------------
//A. Desarrollar una función que reciba por parámetro él array de autos y un String 
//   que represente a un color, retornar un nuevo array con los autos de color según él 
//   parametro, en caso de no encontrar coincidencias retornar un array vacio
//---------------------------------------------

function filtrarAutosPorColor(arrayAutos, color){
    let arrayAutosFiltrados = []
   
    for (let i = 0; i < arrayAutos.length; i++) {
        if (arrayAutos[i].color === color) {
            arrayAutosFiltrados.push(arrayAutos[i]);
        }
    }
    return arrayAutosFiltrados;
}

//Prueba Ejercicio 3 Literal A
console.table(filtrarAutosPorColor(autos, 'negro'));
console.table(filtrarAutosPorColor(autos, 'rojo'));

//---------------------------------------------
//B. Desarrollar una función que reciba por parámetro él array de autos y agregue a 
//   todos una propiedad llamada comisión que contenga un valor de 1000
//---------------------------------------------

function agregarComisionAutos(arrayAutos){
   
    for (let i = 0; i < arrayAutos.length; i++) {
        arrayAutos[i].comision = 1000;
    }
    return arrayAutos;
}

//Prueba Ejercicio 3 Literal B
console.table(agregarComisionAutos(autos));