
function Dosagem(idade, peso){
    if (idade > 12){
        if (peso >= 60){
            gotas = (1000 / 500) * 20
            console.log(`A pessoa tomara uma dosagem de ${gotas}, gotas (1000mg)`)
        } else {
            gotas = (875 / 500) * 20 
            console.log(`A pessoa tomara uma dosagem de ${gotas}, gotas(875mg)`)
        }
    } else {
        if (peso <= 9){
            gotas = (125 / 500) * 20
            console.log(`A pessoa tomara uma dosagem de ${gotas}, gotas(125mg)`)
        } else if (peso > 9 && peso <= 16){
            gotas = (250 / 500) * 20
            console.log(`A pessoa tomara uma dosagem de ${gotas}, gotas(250mg)`)
        } else if (peso > 16 && peso <= 24){
            gotas = (500/ 500) * 20
            console.log(`A pessoa tomara uma dosagem de ${gotas}, gotas(500mg)`)
        } else {
            gotas = (750/ 500) * 20
            console.log(`A pessoa tomara uma dosagem de ${gotas}, gotas(750mg)`)
        }
    }
}

Dosagem(13,60)
Dosagem(13,59)

Dosagem(12,8)
Dosagem(12,16)
Dosagem(12,20)
Dosagem(12,37)