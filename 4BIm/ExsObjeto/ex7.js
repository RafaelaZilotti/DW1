
const carrinho = {
    itens: [
      {
        nome:"Camisa",
        preco: 50
      },
      {
        nome:"Calca",
        preco: 100
      }
      ],
      
    calcularTotal: function (){
      return this.itens.reduce((total, itens) => total + itens.preco, 0)
    }
    
  }
  
  console.log(carrinho, carrinho.calcularTotal())