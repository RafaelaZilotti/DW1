
function countVowels(str){
    let conta = 0
    const vogais = "aAeEiIoOuU"

    for(let i of str){
        if(vogais.includes(i)){
            conta++
        }

    }
    return conta
}

console.log(countVowels("JavaScript"))