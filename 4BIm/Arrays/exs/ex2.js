
function findMax(array){
    let tamanho = array.length
    let max = array[0]

    for(let i = 0; i < tamanho; i++){
        if(array[i] > max){
            max = array[i]
        }
    }
    return max
}

console.log(findMax([1, 2, 3, 4, 5])); // Deve exibir: 5
console.log(findMax([-10, 0, 10, 5])); // Deve exibir: 10