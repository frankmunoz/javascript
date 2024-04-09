/*
Ejercicio 1
Dado el siguiente arreglo de objetos literales:
*/ 
let mascotas = [
    {
        nombre : "Firulais",
        edad: 4 
    },
    {
        nombre : "Michifus",
        edad: 2
    }, 
    {
        nombre : "Azul",
        edad: 7 
    },
    {
        nombre : "Morita",
        edad: 5
    }, 
    {
        nombre : "Pepito",
        edad: 13 
    },
]

/*
Realizar una función que reciba por parámetro dicho arreglo 
y retorne un nuevo array cargado con los objetos cuya edad 
sea menor o igual a 5.
*/ 
function extraerMascotasMenoresA5(mascotas){
    let mascotasMenoresA5 = [];
    for(let i = 0; i< mascotas.length; i++){
        if(mascotas[i].edad <= 5){
            mascotasMenoresA5[i] =  mascotas[i]
        }
    }
    return mascotasMenoresA5
}

console.table(extraerMascotasMenoresA5(mascotas));

/*
Ejercicio 2
Realizar una función que reciba por parámetro el arreglo de objetos del ejercicio 1 
y un String. Esta función deberá ordenar los objetos mediante el algoritmo Bubble Sort 
según su EDAD de forma ascendente o descendente según lo indique el string recibido 
por parámetro, teniendo en cuenta los siguientes criterios:
- Si el String es “ASC” o “asc” encontes ordenar de menor a mayor
- Si el String es “DESC” o “desc” entonces ordenar de mayor a menor
*/
function ordenarMascotas(mascotas, ordenado){
    let mascotasOrdenadas = 0;
    for(let i = 0; i < mascotas.length; i++){
        for(let j = 0; j < mascotas.length - 1; j++ ){
            if(ordenado === 'DESC'){
                if(mascotas[j].edad < mascotas[j + 1].edad){
                    mascotasOrdenadas = mascotas[j + 1]
                    mascotas[j + 1] = mascotas[j]
                    mascotas[j] = mascotasOrdenadas
                }
            }else if(ordenado === 'ASC'){
                if(mascotas[j].edad > mascotas[j + 1].edad){
                    mascotasOrdenadas = mascotas[j + 1]
                    mascotas[j + 1] = mascotas[j]
                    mascotas[j] = mascotasOrdenadas
                }
            }
        }
    }
    return mascotas
}

console.table(ordenarMascotas(mascotas, 'ASC'));
console.table(ordenarMascotas(mascotas, 'DESC'));

/*
Ejercicio 3
Dada la matriz:
*/
let matriz = [
    [5, 2, 2], // 0
    [2, 5, 2], // 1
    [4, 4, 5]  // 2
];

/*
a.  Crear una función que reciba la matriz por parámetro y retorne 
    la suma de todos los valores de la columna 2
*/
function sumarMatriz(matriz){
    let sumatoriaColumna = 0;
    for(let i = 0; i < matriz.length; i++){
        sumatoriaColumna += matriz[i][1];
    }
    return sumatoriaColumna
}

console.log(sumarMatriz(matriz));

/*
b.  Crear una función que reciba la matriz por parámetro y retorne 
    un nuevo array con todos los valores pares de la matriz.
*/
function obtenerValoresParesDeMatriz(matriz){
    let matrizValoresPares = []
    let contador = 0
    for(let i = 0; i < matriz.length; i++){
        for(let j = 0; j < matriz.length; j++){
            if(matriz[i][j] % 2 === 0){
                matrizValoresPares[contador] = matriz[i][j]
            }
            contador ++;
        }
    }

    return matrizValoresPares;
}

console.table(obtenerValoresParesDeMatriz(matriz));
