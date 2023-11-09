import { Router } from "express"
import ServiceModel from "../models/TarefaModel"

export default class ServiceModel {
  constructor(db) {
    this.db = new Servico(db)
  }

  routes() {
    const router = Router()
    router.get('/', (req, res) => {
      const servico = this.db.findAll()
      res.json(servico)
    })

    router.get('/:idServico', (req, res) => {
      const servico = this.db.findById(req.params.idServico)
      if (!servico) {
        res.status(404).json({ message: 'Serviço não encontrado' })
      } else {
        res.json(servico)
      }
    })

    router.post('/', (req, res) => {
      const novoServico = req.body

      this.db.create(novoServico)
      res.json(novoServico)
    })

    router.put('/:idServico', (req, res) => {
      const { idServico } = req.params
      const servico = req.body

      this.db.update(idServico, servico)
      res.json(servico)

    })
    router.delete('/:idServico', (req, res) => {
      const { idServico } = req.params
      this.db.delete(idServico)
      res.json({ message: 'Serviço removido com sucesso' })

    })

    return router

  }
}
