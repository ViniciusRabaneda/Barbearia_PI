//funcionario routes
import { Router } from "express";
import FuncionarioModel from "../models/FuncionarioModel.js"

export default class FuncionarioRoutes {  
 //puxa db do funcionario Model, que puxa do base model, que puxa do config 
 // é necessario puxar o db para poder fazer alteração no arquivo config (adição, exclusão e alteração)
  constructor(db){
        this.db = new FuncionarioModel(db)
    }

routes(){
    const router = Router()
    router.get('/', (req, res) => {
      const funcionarios = this.db.findAll()
      res.json(funcionarios)
    })
    router.get('/:id', (req, res) => {
      const funcionarios = this.db.findById(req.params.id)
      if (!funcionarios) {
        res.status(404).json({ message: 'Funcionário não encontrado' })
      } else {
        res.json(funcionarios)
      }
    })
    router.post('/', (req, res) => {
      const novoFuncionario = req.body
      this.db.create(novoFuncionario)
      res.json(novoFuncionario)
    })
    router.put('/:id', (req, res) => {
      const { id } = req.params
      const funcionario = req.body

      this.db.update(id, funcionario)
      res.json(funcionario)
    })
    router.delete('/:id', (req, res) => {
      const { idFuncionario } = req.params.id
      this.db.delete(idFuncionario)
      res.json({ message: 'Funcionário removido com sucesso' })
    })
    return router
    }
}

