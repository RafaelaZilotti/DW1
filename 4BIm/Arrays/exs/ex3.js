
function countOccurrences(arr,element){
    let tamanho = arr.length
    let ocorrencia = 0

    for(let i = 0; i < tamanho; i++){
        if(arr[i] == element){
            ocorrencia++
        }
    }
    return ocorrencia
}

console.log(countOccurrences([1, 2, 2, 3, 2], 2)); // Deve exibir: 3
console.log(countOccurrences(["apple", "banana", "apple"], "apple")); // Deve exibir: 2