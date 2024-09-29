
function Primo(num) {

    if (num <= 1) {
        return false;
    }

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }

    return true;
}


console.log(Primo(7));  
console.log(Primo(10)); 
