
function isPalindrome(str){

    let original = str
    let reverte = str.split('').reverse().join('')

    if (original == reverte){
        return "E um Palindromo"
    } else{
        return "Nao e um Palindromo"
    }

}

console.log(isPalindrome("ALA"))
console.log(isPalindrome("Java"))