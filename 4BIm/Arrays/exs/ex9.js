

function reverseArray(arr){
    let tamanho = arr.length
    let reverse = []
    
    for(let i = (tamanho - 1); i >= 0 ; i--){
      reverse[reverse.length] = arr[i]
    }
    return reverse
    
  }
  console.log(reverseArray([1, 2, 3, 4])); // Deve exibir: [4, 3, 2, 1]
  console.log(reverseArray(["apple", "banana"])); // Deve exibir: ["banana", "apple"]