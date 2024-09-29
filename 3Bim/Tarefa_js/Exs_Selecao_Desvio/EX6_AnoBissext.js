
function AnoBissex(ano){

    Div4 = ano % 4
    Div100 = ano % 100

    if (Div4 == 0 && Div100 != 0){
        return true
    } else {
        return false
    }
}

let ano = 1988

if (AnoBissex(ano)){
    console.log(`O ano ${ano} e bissexto.`)
}else {
    console.log(`O ano ${ano} nao e bissexto.`)
}