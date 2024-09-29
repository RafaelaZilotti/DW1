

function Triangulo(l1, l2, l3){
	if (l1 + l2 > l3 && l2 + l3 > l1 && l1 + l3 > l2){
		if (l1 == l2 && l2 == l3){
			tipo = "Equilatero"
			return true
		} else if (l1 == l2 || l2 == l3 || l1 == l3){
			tipo = "Isoceles"
			return true
		} else {
			tipo = "Escaleno"
			return true
		}
	} else {
		return false 
	}
}

let l1 = 10
let l2 = 20
let l3 = 15

if (Triangulo(l1,l2,l3)){
    console.log(`Os lados ${l1}, ${l2} e ${l3} formam um triângulo de tipo ${tipo}`)
}else {
    console.log(`Os lados ${l1}, ${l2} e ${l3} NÃO formam um triângulo`)
}