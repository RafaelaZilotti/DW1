
function compensar(precoAl, precoGas){
    conta = (precoGas * 70) / 100

    if (precoAl < conta){
        return true
    } else {
        return false
    }
}

let precoAl = 96
let precoGas = 140

if (compensar(precoAl, precoGas)){
    console.log(`Compensa mais o uso do Alcool`)
}else {
    console.log(`compensa o uso da Gasolina`)
}
