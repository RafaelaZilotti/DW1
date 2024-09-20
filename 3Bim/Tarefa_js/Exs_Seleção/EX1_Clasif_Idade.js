
function classeIdade (idade){

if (idade > 0 && idade <= 7){
    console.log("Infantil A")
} else if (idade > 7 && idade <= 10){
    console.log("Infantil B")
} else if (idade > 10 && idade <= 13 ){
    console.log("Juvenil A")
} else if (idade > 13 && idade <= 17 ){
    console.log("Juvenil B")
} else if (idade > 17 ){
    console.log("Adulto")
}
}

classeIdade(3)
classeIdade(8)
classeIdade(11)
classeIdade(16)
classeIdade(18)