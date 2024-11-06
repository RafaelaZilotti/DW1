

function mergeArrays(arr1, arr2) {
    let tamanho1 = arr1.length
    let tamanho2 = arr2.length
    let junto = []

    for (let i = 0; i < tamanho1; i++) {
        junto[junto.length] = arr1[i];
    }

    for (let j = 0; j < tamanho2; j++) {
        junto[junto.length] = arr2[j];
    }

    return junto;
}

console.log(mergeArrays([1, 2], [3, 4])); // Deve exibir: [1, 2, 3, 4]
console.log(mergeArrays(["apple"], ["banana", "cherry"])); // Deve exibir: ["apple", "banana", "cherry"]