
function Primo(num) {

    if (num <= 1) {
        return false;
    }

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }

    return true;
}

function ContagemPrimos(quant){
    let contador = 0
    let numCont = 2

    while (contador < quant){
        if(Primo(numCont)){
            console.log(numCont)
            contador ++
        }

        numCont ++
    }
}

ContagemPrimos(11)