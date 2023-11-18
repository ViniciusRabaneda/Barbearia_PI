import { Router } from "express";
import ClienteModel from '../models/ClienteModel.js'

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

      // ----------------Verificações campo ID -------------------- //    
      //verifica se o id do cliente já está cadastrado ou não no sistema
      if(this.db.findById(novoCliente.id) != undefined) return res.status(400).json({message: 'Este id já está cadastrado no sistema.'})

      //verifica se o id foi inserido
      if(!novoCliente.id) return res.status(400).json({ message: 'O id é obrigatório' })

      //verifica se o id contém apenas números
      if(!Number(novoCliente.id)) return res.status(400).json({message: 'O id é composto apenas de números.'})




      // ----------------Verificações campo Nome --------------------//     
      //verifica se o nome do cliente foi inserido
      if(!novoCliente.nomeCliente) return res.status(400).json({ message: 'O nome é obrigatório' })

       //verifica se o nome contém apenas letras
       if(!String(novoCliente.nomeCliente)) return res.status(400).json({message: 'O nome deve ser composto apenas de letras.'})




       // ----------------Verificações campo CPF --------------------//   
      //verifica se o CPF do cliente foi inserido
      if(!novoCliente.cpfCliente) return res.status(400).json({ message: 'O CPF é obrigatório' })

      //verifica se o CPF contém apenas letras
      if(!String(novoCliente.cpfCliente)) return res.status(400).json({message: 'O CPF deve ser uma string.'})
    
        // Verifica se o CPF tem 14 dígitos -- contando . e -
      if (novoCliente.cpfCliente.length !== 14)  return res.status(400).json({message: 'O CPF deve ser composto de 14 caracteres.'})

// ----------------Verificações campo EMAIL --------------------//  

      //verifica se o email do cliente foi inserido
      if(!novoCliente.emailCliente) return res.status(400).json({ message: 'O email é obrigatório' })



// ----------------Verificações campo Senha --------------------//  

      //verifica se a senha do cliente foi inserido
      if(!novoCliente.senhaCliente) return res.status(400).json({ message: 'O email é obrigatório' })

      //adiciona novo cliente ao db

      this.db.create(novoCliente)
      
      //retorna o cliente adicionado ao db
      res.json(novoCliente)
    })


    router.put('/:id', (req, res) => {
      const { id } = req.params
      const clientes = req.body
     
      
    // ----------------Verificações campo ID -------------------- //    

      //verifica se o campo id foi inserido
      if(!clientes.id) return res.status(400).json({ message: 'O id é obrigatório' })

      //verifica se o id contém apenas números
      if(!Number(clientes.id)) return res.status(400).json({message: 'O id é composto apenas de números.'})




      // ----------------Verificações campo Nome --------------------//     
      //verifica se o nome do cliente foi inserido
      if(!clientes.nomeCliente) return res.status(400).json({ message: 'O nome é obrigatório' })

       //verifica se o nome contém apenas letras
       if(!String(clientes.nomeCliente)) return res.status(400).json({message: 'O nome deve ser composto apenas de letras.'})




       // ----------------Verificações campo CPF --------------------//   
      //verifica se o CPF do cliente foi inserido
      if(!clientes.cpfCliente) return res.status(400).json({ message: 'O CPF é obrigatório' })

      //verifica se o CPF contém apenas letras
      if(!String(clientes.cpfCliente)) return res.status(400).json({message: 'O CPF deve ser uma string.'})
    
        // Verifica se o CPF tem 14 dígitos -- contando . e -
      if (clientes.cpfCliente.length !== 14)  return res.status(400).json({message: 'O CPF deve ser composto de 14 caracteres.'})




// ----------------Verificações campo EMAIL --------------------//  

      //verifica se o email do cliente foi inserido
      if(!clientes.emailCliente) return res.status(400).json({ message: 'O email é obrigatório' })



// ----------------Verificações campo Senha --------------------//  

      //verifica se a senha do cliente foi inserido
      if(!clientes.senhaCliente) return res.status(400).json({ message: 'O email é obrigatório' })

      //atualiza o db com o id e os parametros do cliente
      this.db.update(id, clientes)

      // retorna o cliente alterado
      res.json(clientes)
    })
    router.delete('/:id', (req, res) => {
      this.db.delete(Number(req.params.id))
      res.json({ message: 'Tarefa removida com sucesso' })
    })
    return router
    }
}
