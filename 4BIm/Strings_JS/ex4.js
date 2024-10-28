
function countOcurrences(str, char){
    let conta = 0

    for(let i of str){
        if(i.includes(char)){
            conta++
        }
    }

    return conta

}

console.log(countOcurrences("banana","a"))