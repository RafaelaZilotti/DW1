
const pessoa = {
    nome: "Joao",
    idade: 17,
    cumprimentar: function(){
      console.log(`Olá, meu nome é ${this.nome}`)
    }
    
  }
  pessoa.cumprimentar();