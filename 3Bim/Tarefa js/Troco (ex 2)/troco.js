let inputTroco = document.getElementById("troco")
let divSaida20 = document.getElementById("saida20")
let divSaida10 = document.getElementById("saida10")
let divSaida1 = document.getElementById("saida1")
let botaoCalc = document.getElementById("calcular")

botaoCalc.onclick = calcularTroco

function calcularTroco() {
    

    //ENTRADA

    let troco = Number(inputTroco.value)

    //PROCESSAMENTO

     let notas20 = troco / 20

     let resto = troco % 20

     let notas10 = resto / 10

     let moedas1 = notas10 % 10

    //SAIDA

    divSaida20.innerText = notas20
    divSaida10.innerText = notas10
    divSaida1.innerText = moedas1
    
}