/*Tenemos como base un array de cuentas bancarias, donde a cada una la representamos con un objeto literal. A partir de este array trabajaremos sobre los siguientes enunciados, resolviendo de la forma que nos parezca más adecuada*/

const arrayCuentas =
[
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
    {
        titular: "Ethel Leon",
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
  /* 
    Obtener un nuevo array de cuentas cuyas edades sean menores a 30. */

console.table (arrayCuentas)

    let menoresA30 = (cuentas) =>{
        let arrMenoresA30 = []
        for (let i = 0; i < cuentas.length; i++) {
            const element = cuentas[i]
            if (element.edadTitular < 30) {
                arrMenoresA30.push(element)       
            }
        } 
        return arrMenoresA30
    }
    
console.log ("-------array menores a 30-----")
console.table (menoresA30 (arrayCuentas))

/* 
Obtener un nuevo array de cuentas cuyas edades sean mayor o igual a 30. */

let mayoresA30 = (cuentas) =>{
    let arrMayoresA30 = []
    for (let i = 0; i < cuentas.length; i++) {
        const element = cuentas[i]
        if (element.edadTitular >= 30) {
            arrMayoresA30.push(element)       
        }
    } 
    return arrMayoresA30
}

console.log ("-------array mayores a 30-----")
console.table (mayoresA30 (arrayCuentas))

/* 
Obtener un nuevo array de cuentas cuyas edades sean menores o igual a 30. */

let menoresEigualesA30 = (cuentas) =>{
    let arrMenoreseIgualesA30 = []
    for (let i = 0; i < cuentas.length; i++) {
        const element = cuentas[i]
        if (element.edadTitular <= 30) {
            arrMenoreseIgualesA30.push(element)       
        }
    } 
    return arrMenoreseIgualesA30 
}
console.log ("-------array menores e iguales a 30-----")
console.table (menoresEigualesA30 (arrayCuentas))

/* 
Obtener la cuenta con el titular de la misma más joven. */

let obtenerMasJoven = (cuentas) => {
    let masJoven = cuentas[0]
    for (let i = 1; i < cuentas.length; i++) {
        const element = cuentas[i]
         if (element.edadTitular < masJoven.edadTitular) {
            masJoven = element
        }
    }
    return masJoven
}

console.log ("-------titular más joven------")
console.table (obtenerMasJoven(arrayCuentas))