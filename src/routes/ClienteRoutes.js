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
    router.get('/:idCliente', (req, res) => {
      const clientes = this.db.findById(req.params.idCliente)
      if (!clientes) {
        res.status(404).json({ message: 'Cliente não encontrado' })
      } else {
        res.json(clientes)
      }
    })
    router.post('/', (req, res) => {
      const novoCliente = req.body
      this.db.create(novoCliente)
      res.json(novoCliente)
    })
    router.put('/:idCliente', (req, res) => {
      const { idCliente } = req.params.idCliente
      const cliente = req.body

      this.db.update(idCliente, cliente)
      res.json(cliente)
    })
    router.delete('/:idCliente', (req, res) => {
      const { idCliente } = req.params.idCliente
      this.db.delete(idCliente)
      res.json({ message: 'Cliente removido com sucesso' })
    })
    return router
    }
}
