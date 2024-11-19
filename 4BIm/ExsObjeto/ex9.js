
const estoque = [
    {
      id: 1,
      nome:"Caneta",
      quantidade: 10
    },
    {
      id: 2,
      nome:"Caderno",
      quantidade: 15
    }
  ]
  
  function atualizarQuantidade(id, novoValor) {
      const produto = estoque.find(item => item.id === id); 
      if (produto) {
          console.log("Antes da atualização:", produto);
          produto.quantidade = novoValor; 
          console.log("Estoque depois:", produto); 
      } else {
          console.log("Produto nao encontrado"); 
      }
  }
  
  atualizarQuantidade(2,30)