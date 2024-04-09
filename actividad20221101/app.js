/*
3. Dado él siguiente array de personas
*/ 

const personas = [
    {
        "nombre":"Arlene Barr"
        , "legajo":3955
        , "edad":33
    }
    ,  {
        "nombre":"Roslyn Torres"
        , "legajo":3925
        , "edad":27
    }
    , {
        "nombre":"Cleo Lopez"
        , "legajo":1965
        , "edad":34
    }
    , {
        "nombre":"Daniel Malone"
        , "legajo":3925
        , "edad":30
    }
    , {
        "nombre":"Ethel Leon"
        , "legajo":1915
        , "edad":34
    }
    , {
        "nombre":"Harding Mitchell"
        , "legajo":1905
        , "edad":25
    }
];
/*
-   Desarrollar una función llamada orderAscLegajo que reciba por parámetro él array de personas 
    y realice un ordenamiento de forma ascendente 
-   Desarrollar una función llamada orderDescLegajo que reciba por parámetro él array de personas y realice un ordenamiento de forma descendente 
-   Pensar de qué forma se puede realizar los dos ítems anteriores en una sola función
*/ 

function orderAscLegajo(personasArray){
    let legajoTemporal = 0;
    let arraySize = Object.keys(personasArray).length
    for(let i = 0; i < arraySize; i++){
        for(j = 0; j < arraySize - 1; j++ ){
            if(personasArray[j].legajo > personasArray[j + 1].legajo){
                legajoTemporal = personasArray[j + 1].legajo
                personasArray[j + 1].legajo = personasArray[j].legajo 
                personasArray[j].legajo = legajoTemporal
            }
        }
    }
    return personasArray
}

function orderDescLegajo(personasArray){
    let legajoTemporal = 0;
    let arraySize = Object.keys(personasArray).length
    for(let i = 0; i < arraySize; i++){
        for(j = 0; j < arraySize - 1; j++ ){
            if(personasArray[j].legajo < personasArray[j + 1].legajo){
                legajoTemporal = personasArray[j + 1].legajo
                personasArray[j + 1].legajo = personasArray[j].legajo 
                personasArray[j].legajo = legajoTemporal
            }
        }
    }
    return personasArray
}

function orderLegajo(personasArray, ordered){
    let legajoTemporal = 0;
    let arraySize = Object.keys(personasArray).length
    for(let i = 0; i < arraySize; i++){
        for(j = 0; j < arraySize - 1; j++ ){
            if(ordered === 'DESC'){
                if(personasArray[j].legajo < personasArray[j + 1].legajo){
                    legajoTemporal = personasArray[j + 1].legajo
                    personasArray[j + 1].legajo = personasArray[j].legajo 
                    personasArray[j].legajo = legajoTemporal
                }
            }else if(ordered === 'ASC'){
                if(personasArray[j].legajo > personasArray[j + 1].legajo){
                    legajoTemporal = personasArray[j + 1].legajo
                    personasArray[j + 1].legajo = personasArray[j].legajo 
                    personasArray[j].legajo = legajoTemporal
                }
            }
        }
    }
    return personasArray
}

console.table(personas)
let resultAsc = orderAscLegajo(personas);
console.table(resultAsc)
let resultDesc = orderDescLegajo(personas);
console.table(resultDesc)
let ordered = orderLegajo(personas,'DESC')
console.table(ordered)
