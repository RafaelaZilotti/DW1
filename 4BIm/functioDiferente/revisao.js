const numeros = [10, 15, 20, 25, 30, 35]
// 
// const copia = []
// for(numero of numeros){
//     copia.push(numero * 2)
// }
// console.log(copia)

function mult2(elemento){
    return elemento * 2
}

const mult3 = function (elemento){
    return elemento * 3
}

// chamada de função anonima qnd n tem nome

//const mult4 = (elemento) => {
//    return elemento * 4
//}

const mult4 = numeros.map(elemento => elemento * 4)

// função de flechinha (arrow function)

const copia = numeros.map(mult2)
console.log(copia)

const copia2 = numeros.map(function (elemento){ return elemento * 2})
console.log(copia2)

const numerosString = numeros.map(numero => numero)

console.log(numeros)
console.log(numerosString)