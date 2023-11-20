import { Router } from "express";
import ClienteModel from '../models/ClienteModel.js'

function validarCPF(cpf) {
  // Remover caracteres não numéricos
  const cpfNumerico = cpf.replace(/\D/g, '');

  // Verificar se o CPF tem 11 dígitos
  if (cpfNumerico.length !== 11) {
    return false;
  }

  // Verificar se todos os dígitos são iguais, o que torna o CPF inválido. Essa regex cria um grupo de captura para um caracter do tipo numero  -- /^(\d)\ e depois compara esse primeiro numero uma ou mais vezes. O \1 vai buscar o que foi capturado no primeiro grupo de captura e o + exige que seja o mesmo 1 ou mais vezes.  
  if (/^(\d)\1+$/.test(cpfNumerico)) {
    return false;
  }

  // Calcular o primeiro dígito verificador
  let soma = 0;
  for (let i = 0; i < 9; i++) {
    soma += parseInt(cpfNumerico.charAt(i)) * (10 - i);
  }
  let resto = (soma * 10) % 11;
  const digitoVerificador1 = (resto === 10 || resto === 11) ? 0 : resto;

  // Calcular o segundo dígito verificador
  soma = 0;
  for (let i = 0; i < 10; i++) {
    soma += parseInt(cpfNumerico.charAt(i)) * (11 - i);
  }
  resto = (soma * 10) % 11;
  const digitoVerificador2 = (resto === 10 || resto === 11) ? 0 : resto;

  // Verificar se os dígitos verificadores calculados são iguais aos informados no CPF
  if (parseInt(cpfNumerico.charAt(9)) !== digitoVerificador1 || parseInt(cpfNumerico.charAt(10)) !== digitoVerificador2) {
    return false;
  }

  // Se chegou até aqui, consideramos o CPF válido
  return true;
}


function validarEmail(email){
  // lista de dominos válidos ** Pode ser atualizada**
  const listaEmailPermitidos = ["@hotmail.com","@uol.com","@gmail.com","@outlook.com","@fatec.sp.gov.br","@yahoo.com"]
  //verifica se o email digitado possui algum dos dominios lisados no vetor. O método some testa as opções do array retornando true ou false, email.endsWith, verifica o texto do array esta presente no final do email passado pelo usuário.

  const emailValido = listaEmailPermitidos.some(terminacao => email.endsWith(terminacao));

  //retorna true ou false

  return emailValido;
  };


export default class ClienteRoutes {  
 //puxa db do client Model, que puxa do base model, que puxa do config 
 // é necessario puxar o db para poder fazer alteração no arquivo config (adição, exclusão e alteração)
  constructor(db){
        this.db = new ClienteModel(db)
    }

routes(){
    const router = Router()
    router.get('/', (req, res) => {
      const clientes = this.db.findAll()
      res.json(clientes)
    })
    router.get('/:id', (req, res) => {
      const clientes = this.db.findById(req.params.id)
      if (!clientes) {
        res.status(404).json({ message: 'Cliente não encontrado' })
      } else {
        res.json(clientes)
      }
    })
    router.post('/', (req, res) => {
      const novoCliente = req.body

// ----------------POST - Verificações campo ID -------------------- //    
      //verifica se o id do cliente já está cadastrado ou não no sistema
      if(this.db.findById(novoCliente.id) != undefined) return res.status(400).json({message: 'Este id já está cadastrado no sistema.'})

      //  1. verifica se o id foi inserido
      if(!novoCliente.id) return res.status(400).json({ message: 'O id é obrigatório' })

      //  2. verifica se o id contém apenas números
      if(!Number(novoCliente.id)) return res.status(400).json({message: 'O id é composto apenas de números.'})

// ---------------- POST - Verificações campo Nome --------------------//     
      
      //  1. verifica se o nome do cliente foi inserido
      if(!novoCliente.nomeCliente) return res.status(400).json({ message: 'O nome é obrigatório' })

       // 2. verifica se o nome contém apenas letras
       if(!String(novoCliente.nomeCliente)) return res.status(400).json({message: 'O nome deve ser composto apenas de letras.'})

// ---------------- POST - Verificações campo CPF --------------------//   
      
       // 1. verifica se o CPF do cliente foi inserido
      if(!novoCliente.cpfCliente) return res.status(400).json({ message: 'O CPF é obrigatório' })

      //  2. verifica se o CPF contém apenas letras
      if(!String(novoCliente.cpfCliente)) return res.status(400).json({message: 'O CPF deve ser uma string.'})

      // 3. chama função validar cpf
      if(validarCPF(novoCliente.cpfCliente) != true) return res.status(400).json({message: 'O CPF é inválido.'})

// ---------------- POST - Verificação campo EMAIL --------------------//  

      //  1. verifica se o email do cliente foi inserido
      if(!novoCliente.emailCliente) return res.status(400).json({ message: 'O email é obrigatório' })
      
      //  2. valida dominio do email
      if (validarEmail(novoCliente.emailCliente) != true) return res.status(400).json({message: 'Dominio de email inválido, favor consultar lista de domínios válidos'})

// ---------------- POST - Verificações campo Senha --------------------//  

      //  1. verifica se a senha do cliente foi inserido
      if(!novoCliente.senhaCliente) return res.status(400).json({ message: 'O email é obrigatório' })

      //adiciona novo cliente ao db
      this.db.create(novoCliente)

      //retorna o cliente adicionado ao db
      res.json(novoCliente)
    })


    router.put('/:id', (req, res) => {
      const { id } = req.params
      const alterarCliente = req.body
     
      
// ---------------- PUT (ALTERAR) Verificação do campo ID -------------------- //    

      //  1. verifica se o campo id foi inserido
      if(!alterarCliente.id) return res.status(400).json({ message: 'O id é obrigatório' })

      //  2. verifica se o id contém apenas números
      if(!Number(alterarCliente.id)) return res.status(400).json({message: 'O id é composto apenas de números.'})

// ---------------- PUT (ALTERAR) Verificação do campo Nome --------------------//     
     
      //  1. verifica se o nome do cliente foi inserido
      if(!alterarCliente.nomeCliente) return res.status(400).json({ message: 'O nome é obrigatório' })

       // 2. verifica se o nome contém apenas letras
       if(!String(alterarCliente.nomeCliente)) return res.status(400).json({message: 'O nome deve ser composto apenas de letras.'})

// ---------------- PUT (ALTERAR) Verificação do campo CPF --------------------//   
      //  1. verifica se o CPF do cliente foi inserido
      if(!alterarCliente.cpfCliente) return res.status(400).json({ message: 'O CPF é obrigatório' })

      //  2. verifica se o CPF contém apenas letras
      if(!String(alterarCliente.cpfCliente)) return res.status(400).json({message: 'O CPF deve ser uma string.'})
    
      //  3. chama função validar cpf
      if(validarCPF(alterarCliente.cpfCliente) != true) return res.status(400).json({message: 'O CPF é inválido.'})
      
// ---------------- PUT (ALTERAR) Verificação do campo EMAIL --------------------//  

      //  1. verifica se o email do cliente foi inserido
      if(!alterarCliente.emailCliente) return res.status(400).json({ message: 'O email é obrigatório' })

      //  2. valida dominio do email
      if (validarEmail(alterarCliente.emailCliente) != true) return res.status(400).json({message: 'Dominio de email inválido, favor consultar lista de domínios válidos'})

// ---------------- PUT (ALTERAR) Verificação do campo Senha --------------------//  

      //  1. verifica se a senha do cliente foi inserido
      if(!alterarCliente.senhaCliente) return res.status(400).json({ message: 'O email é obrigatório' })

      //atualiza o db com o id e os parametros do cliente
      this.db.update(id, alterarCliente)
      // retorna o cliente alterado
      res.json(alterarCliente)
    })
    router.delete('/:id', (req, res) => {
      this.db.delete(Number(req.params.id))
      res.json({ message: 'Cliente removido com sucesso' })
    })
    return router
    }
}
