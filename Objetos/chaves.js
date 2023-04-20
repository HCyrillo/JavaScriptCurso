const cliente = {
    nome: "Joao",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["1155555550", "1144444440"],
  };
  
  cliente.enderecos = [
    {
      rua: "R. Joseph Climber",
      numero: 1337,
      apartamento: true,
      complemento: "ap 934",
    },
  ];
  
  const chavesDoObjeto = Object.values(cliente);

  const valoresEmUmObjeto = {
   nomecliente: cliente.nome,
   ...cliente.enderecos[0]
  }
  
  console.log(valoresEmUmObjeto);
  
  /*if (!chavesDoObjeto.includes("enderecos")) {
    console.error("Erro. É necessário ter um endereço cadastrado.");
  }*/