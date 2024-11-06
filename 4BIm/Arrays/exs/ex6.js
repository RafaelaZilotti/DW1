

function average(arr){
    let tamanho = arr.length
    let soma = 0
    
    for(let i = 0; i < tamanho; i++){
      soma = soma + arr[i]
    }
    
    return (soma / tamanho)
  }
  console.log(average([1, 2, 3, 4])); // Deve exibir: 2.5
  console.log(average([10, 20, 30])); // Deve exibir: 20