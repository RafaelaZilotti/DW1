

function findIndex(arr, element){
    let tamanho = arr.length
    let index = -1
    
    for(let i = 0; i < tamanho; i++){
      if(arr[i] == element){
        index = i
      } 
    }
    return index
  }
  console.log(findIndex([1, 2, 3, 4], 3)); // Deve exibir: 2
  console.log(findIndex(["apple", "banana"], "cherry")); // Deve exibir: -1