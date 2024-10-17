
 function somaSerie(cont){
    let soma = 0
    let y = 1


    for(let x=1; x <=cont; x++ , y += 2){

        soma = soma + (x * y)

    }

    return soma
}

console.log(somaSerie(3)) 
console.log(somaSerie(4)) 


//-----------------------------


function menor(n1, n2, n3){

    if (n1 <= n2 && n1 <= n3){
        return(n1)
    } else if (n2 <= n3 && n2 <= n1){
        return(n2)
    } else if (n3 <= n1 && n3 <= n2) {
        return(n3)
    }
}

menor(1,2,2)
menor(2,1,2)
menor(2,2,1)
menor(1,1,2)
