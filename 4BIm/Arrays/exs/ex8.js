

function getEvenNumbers(arr){
    let tamanho = arr.length
    let pares = []
    
    for(let i = 0; i < tamanho; i++){
      if(arr[i] % 2 == 0){
        pares[pares.length] = arr[i]
      }
    }
    return pares
    
  }
  
  console.log(getEvenNumbers([1, 2, 3, 4, 5, 6])); // Deve exibir: [2, 4, 6]
  console.log(getEvenNumbers([10, 15, 20, 25])); // Deve exibir: [10, 20]