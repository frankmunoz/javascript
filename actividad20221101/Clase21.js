/*3. Dado él siguiente array de personas*/

const personas = [

    {
    nombre: "Arlene Barr",
    legajo: 3955,
    edad: 33,
    },
    {
    nombre: "Roslyn Torres",
    legajo: 3925,
    edad: 27,
    },
    {
    nombre: "Cleo Lopez",
    legajo: 1965,
    edad: 34,
    },
    {
    nombre: "Daniel Malone",
    legajo: 3925,
    edad: 30,
    },
    {
    nombre: "Ethel Leon",
    legajo: 1915,
    edad: 34,
    },
    {
    nombre: "Harding Mitchell",
    legajo: 1905,
    edad: 25,
    }
]

/* Desarrollar una función llamada orderAscLegajo que reciba por parámetro él
array de personas y realice un ordenamiento de forma descendente
*/
function orderDescLegajo(array){

    for(let i = 0; i < array.lenght;i++){
        for(let j = 0;j < array.lenght-1;j++){
            if(array[j].legajo>array[j+1].legajo){
                let aux = array[j]
                array[j] = array[j+1]
                array[j+1] = aux

            }
        }
    }
    return array

}

console.table(orderDescLegajo(personas))

/* Desarrollar una función llamada orderAscLegajo que reciba por parámetro él
array de personas y realice un ordenamiento de forma descendente
*/

function orderAscLegajo(array) {
    
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - 1; j++) {
            if (array [j].legajo > array [j + 1].legajo) {
                let aux = array [j]
                array [j] = array [j+1]
                array [j+1] = aux

            }
            
        }
        
    }
    return array
}

console.table(orderAscLegajo(personas));


/*PRUEBA*/

function orderAscLegajo2(array) {
    
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - 1; j++) {
            if (array [j].legajo > array [j + 1].legajo) {
                let aux = array [j]
                array [j] = array [j+1]
                array [j+1] = aux

            }
            
        }
        
    }
}

console.table(personas);

console.log("Despues")

orderAscLegajo2(personas)

console.table(personas)


