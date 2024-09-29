
function Transformcm(medida, unidade){
    switch (unidade) {
        case 'm':
            return medida * 100

        case 'mm':
            return medida / 10

        case 'km':
            return medida * 100000
    }
}

let numero = 1
let unidade = 'm'

const result = Transformcm(numero, unidade)
console.log(`${numero} ${unidade} é igual a ${result} cm`);