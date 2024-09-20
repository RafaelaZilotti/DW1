let inputDistancia = document.getElementById("distancia")
let inputAutonomia = document.getElementById("autonomia")
let inputTanque = document.getElementById("tanque")
let inputCombustivel = document.getElementById("combustivel")
let inputPedagio = document.getElementById("pedagio")
let divSaida1 = document.getElementById("saida1")
let divSaida2 = document.getElementById("saida2")
let botaoCalc = document.getElementById("calcular")

botaoCalc.onclick = calcularCusto

function calcularCusto() {
    

    //ENTRADA

    let dist = Number(inputDistancia.value)
    let auto = Number(inputAutonomia.value)
    let tanq = Number(inputTanque.value)
    let comb = Number(inputCombustivel.value)
    let pedg = Number(inputPedagio.value)

    //PROCESSAMENTO

     let gastocomb = dist / auto
     let paradas = gastocomb / tanq

     let totalComb = gastocomb * comb
     let totalViagem = totalComb + pedg

    //SAIDA

    divSaida1.innerText = totalViagem.toFixed(2)
    divSaida2.innerText = paradas.toFixed(0)
    
}