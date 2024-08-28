let inputCapital = document.getElementById("capital")
let inputTaxa = document.getElementById("taxa")
let inputPeriodo = document.getElementById("periodo")
let divSaida = document.getElementById("saida")
let divSaida2 = document.getElementById("saida2")
let botaoCalc = document.getElementById("calcular")

botaoCalc.onclick = calcularJuros

function calcularJuros() {
    

    //ENTRADA

    let capital = Number(inputCapital.value)
    let taxa = Number(inputTaxa.value) 
    let periodo = Number(inputPeriodo.value)


    //PROCESSAMENTO

    let montante = capital * ((1 + taxa) ** periodo)
    let capitalsubtmont = montante - capital

    //SAIDA

    divSaida.innerText = montante
    divSaida2.innerText = capitalsubtmont
    
}