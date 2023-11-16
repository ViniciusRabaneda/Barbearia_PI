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

      if(!novoCliente.titulo) return res.status(400).json({ message: 'O título é obrigatório' })
      if(!novoCliente.concluida) return res.status(400).json({ message: 'O campo concluída é obrigatório' })
      if(!novoCliente.usuarioId) return res.status(400).json({ message: 'O campo usuárioId é obrigatório' })

      this.db.create(novoCliente)
      res.json(novoCliente)
    })
    router.put('/:id', (req, res) => {
      const clientes = this.db.update(Number(req.params.id), req.body)
      if(!clientes.titulo) return res.status(400).json({ message: 'O título é obrigatório' })
      if(!clientes.concluida) return res.status(400).json({ message: 'O campo concluída é obrigatório' })
      if(!clientes.usuarioId) return res.status(400).json({ message: 'O campo usuárioId é obrigatório' })
      res.json(clientes)




    })
    router.delete('/:id', (req, res) => {
      this.db.delete(Number(req.params.id))
      res.json({ message: 'Tarefa removida com sucesso' })
    })
    return router
    }
}
