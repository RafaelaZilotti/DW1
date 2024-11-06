
function allEquals(arr){
  let tamanho = arr.length
  let inicial = arr[0]
  let igualdade = 2
  
  for(let i = 0; i < tamanho; i++){
    if(arr[i] == inicial){
      igualdade = igualdade * 2
    } else{
      igualdade = igualdade * 1.2
    }
  }
  if((igualdade % 2) == 0){
    return true
  } else{
    return false
  }
}
console.log(allEquals([1, 1, 1])); // Deve exibir: true
console.log(allEquals([1, 2, 1])); // Deve exibir: false

