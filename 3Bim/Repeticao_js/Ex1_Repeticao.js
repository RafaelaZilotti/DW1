
function tabuada(mult){

    let num = 0

    while(num <= 10){
       //console.log(mult, "*", num, "=", mult*num)
       // ou 
       console.log(` ${mult} X ${num} = ${mult * num} `)
       num += 1
    }

    console.log("------------------")

}

tabuada(2)
tabuada(5)

function tabuada2(n){

    //inicializacao - condição - incremento

    for (let i = 0; i <= 10; i++){
        console.log(` ${n} X ${i} = ${n * i} `)
    }
}

tabuada2(2)