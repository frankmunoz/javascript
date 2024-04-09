/* 
CLASE INTEGRADORA DE CONTENIDOS II
*/

function sumarSiEsParA(a, b) {
    if (a % 2 === 0) {
        return a + b
    }else{
        return a - b
    }
}

/* console.log(sumarSiEsParA(2,1)); //  3
console.log(sumarSiEsParA(1,4)); // -3
 */
const edades = [11, 12, 15, 18, 25, 22, 10, 33, 18, 5, 101];

/* Obtener en un nuevo array las edades menores a 18. */


function menores(arrayEdades) {
    let arrayMenores = []
   
    for (let i = 0; i < arrayEdades.length; i++) {
        if (arrayEdades[i] < 18) {
            arrayMenores.push(arrayEdades[i])
        }
    }
    return arrayMenores
}

function mayores(arrayEdades) {
    let arrayMayores = []
   
    for (let i = 0; i < arrayEdades.length; i++) {
        if (arrayEdades[i] >= 18) {
            arrayMayores.push(arrayEdades[i])
        }
    }
    return arrayMayores
}

function iguales(arrayEdades) {
    let arrayIguales = []
   
    for (let i = 0; i < arrayEdades.length; i++) {
        if (arrayEdades[i] === 18) {
            arrayIguales.push(arrayEdades[i])
        }
    }

    return arrayIguales
}

/* Obtener el menor */
//  console.table(edades);
function obtenerMenor(arrayEdades) {
    
    let menor = arrayEdades[0];
    
    for (let i = 0; i < arrayEdades.length; i++) {
        
        if (arrayEdades[i] < menor) {
            menor = arrayEdades[i]
        }
    }
 
    return menor
}

// console.log(obtenerMenor(edades)) 

/* 


*/

let misMascotas = [
    {
        nombre: 'Tom',
        raza : 'Dogo',
        edad : 10,
        sonido :'Gua gua'
    },
    {
        nombre: 'Negrito',
        raza : 'criollo',
        edad : 5,
        sonido :'Guau'
    },
    {
        nombre: 'ronnie' ,
        raza: 'pitbull',
        edad: 16,
        sonido:  "guaf guaf",
    },
    {
        nombre: 'Bruno' ,
        raza: 'french poodle',
        edad: 8,
        sonido:  "guaf guaf",
    }
]
// console.table(misMascotas);
//● Si la mascota tiene menos de 6 años, debe aumentar su edad en 1

let aumentarEdad2 = (datos)=> {
    for (let i = 0; i < datos.length; i++) {
       
        if (datos[i].edad < 6 ) {
            datos[i].edad++; 
        }
//● Si la mascota tiene entre 6 y 10 años, debe aumentar su edad en 2
        else if (datos[i].edad >= 6 || datos[i].edad < 10 ){
            datos[i].edad += 2;
        }
//● Si la mascota tiene más de 10 años, deberá sumarle la mitad de su edad
        else if (datos[i].edad >= 10) {
            datos[i].edad += (datos[i].edad / 2)
        }

    }
}
/* console.table(misMascotas)
aumentarEdad2(misMascotas)
console.table(misMascotas) */
