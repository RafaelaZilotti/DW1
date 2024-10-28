
function getInitials(str){

    let aa = str.split(" ")
    let primeiroNome = aa[0]
    let segundoNome = aa[1]


    return primeiroNome[0] + segundoNome[0]

}

console.log(getInitials('Rafaela Zilotti'))