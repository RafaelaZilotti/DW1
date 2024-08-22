//Captura dos elementos que serao manipulados no html
let inputPeso = document.getElementById("peso")
let inputAltura = document.getElementById("altura")
let divSaida = document.getElementById("saida")
let botaoCalc = document.getElementById("calcular")

botaoCalc.onclick = calcularIMC

function calcularIMC() {
    

    //ENTRADA

    let peso = Number(inputPeso.value)
    let altura = Number(inputAltura.value)

    //PROCESSAMENTO

    let imc = peso / (altura * altura)

    //SAIDA

    divSaida.innerText = imc
    
}

