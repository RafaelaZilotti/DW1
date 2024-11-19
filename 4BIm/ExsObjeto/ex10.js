
const usuarios = [
    {
      nome:"Merlin",
      idade: 20,
      email:"MerlynEmrys@gmail.com"
    },
    {
      nome:"Arthur",
      idade: 23,
      email:"ArthurThePendragon@gmail.com"
    }
    
  ]
    
  const nomesEemails = usuarios.map(usuarios => {
      return (`nome: ${usuarios.nome}, email: ${usuarios.email}`);
  })
  
  console.log(nomesEemails)
  