

function removeDuplicates(arr) {
    let tamanho = arr. length
    let unico = [];

    for (let i = 0; i < tamanho; i++) {
        let duplicata = false;

        for (let j = 0; j < unico.length; j++) {
            if (arr[i] === unico[j]) {
                duplicata = true;
                break;
            }
        }

        if (!duplicata) {
            unico.push(arr[i]);
        }
    }

    return unico;
}

console.log(removeDuplicates([1, 2, 2, 3, 3, 3, 4])); // Deve exibir: [1, 2, 3, 4]
console.log(removeDuplicates(["apple", "apple", "banana"])); // Deve exibir: ["apple", "banana"]
