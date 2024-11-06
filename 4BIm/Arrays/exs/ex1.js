
function sumArray(array){
    let soma = 0
    let tamanho = array.length

    for(let i = 0; i < tamanho; i++){
        soma = soma + array[i]
    }
    return soma
}
  
console.log(sumArray([1, 2, 3, 4]));
console.log(sumArray([10, -10, 10]));
  