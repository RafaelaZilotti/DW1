
function Pares(num){
    while (num != 0){
        par = num % 2

        if (par == 0){
            console.log(`${num}`)
        }

        num --
    }
}

Pares(14)