let inputMaxV = document.getElementById("maxvia")
let inputVel = document.getElementById("velcarro")
let divSaida = document.getElementById("resp")
let botaoCalc = document.getElementById("calc")

botaoCalc.onclick = calcularMulta

function calcularMulta() {
    

    //ENTRADA

    let maxvia = Number(inputMaxV.value)
    let velcar = Number(inputVel.value) 
    let resp = ' '


    //PROCESSAMENTO

    let conta1 = (velcar - maxvia)/ maxvia

    if (conta1 <= 0){
         resp = "O limite da via não foi ultrapassado."
    } else {
        if (conta1 <= 0.2){
            resp = `Você excedeu ${conta1 * 100 }% da velocidade maxima. Sua multa é de R$ 130,16`
        } else{
            if (conta1 <= 0.5){
                resp = `Você excedeu ${conta1 * 100 }% da velocidade maxima. Sua multa é de R$ 195,23`        
        } else {
            resp = `Você excedeu ${conta1 * 100 }% da velocidade maxima. Sua multa é de R$ 880,41`
        }
    }
    }

    //SAIDA

    divSaida.innerText = resp
    
}