import { Router } from "express"
import ServiceModel from '../models/servicesModel.js'

export default class ServiceRoutes {
  constructor(db) {
    this.db = new ServiceModel(db)
  }

  routes() {
    const router = Router()
    router.get('/', (req, res) => {
      const servico = this.db.findAll()
      res.json(servico)
    })

    router.get('/:id', (req, res) => {
      const servico = this.db.findById(req.params.id)
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

    router.put('/:id', (req, res) => {
      const { id } = req.params
      const servico = req.body

      this.db.update(id, servico)
      res.json(servico)

    })
    router.delete('/:id', (req, res) => {
      const { id } = req.params
      this.db.delete(id)
      res.json({ message: 'Serviço removido com sucesso' })

    })

    return router

  }
}
