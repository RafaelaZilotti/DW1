function Fatorial(num) {
    if (num < 0) {
        return "Fatorial não existe para números negativos";
    }
    if (num === 0 || num === 1) {
        return `O fatorial ${num} e 1`;
    }
    
    let resultado = 1;
    let i = 2
    for ( i; i <= num; i++) {
        resultado *= i;
    }
    
    return `O fatorial de ${num} e ${resultado}`;
}

console.log(Fatorial(5)); 
console.log(Fatorial(0)); 
console.log(Fatorial(-2)); 
