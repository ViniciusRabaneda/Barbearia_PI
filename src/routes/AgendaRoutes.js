import { Router } from "express";
import AgendamentoModel from "../models/agendamentoModel.js";

export default class AgendaRoutes {
  constructor(db) {
    this.db = new AgendamentoModel(db) 
  }

  routes() {
    const router = Router()

    router.get('/', (req, res) => {
      const agenda = this.db.findAll()
      res.json(agenda)
    })

    router.get('/:id', (req, res) => {
      const { id } = req.params
      const agenda = this.db.findById(id)
      if (!agenda) {
        return res.status(404).json({ message: 'Agenda não encontrada' })
      }
      res.json(agenda)
    })

    router.post('/', (req, res) => {
      const novoAgendamento = req.body
      this.db.create(novoAgendamento)
      res.json(novoAgendamento)
    })

    router.put('/:id', (req, res) => {
      const { id } = req.params
      const novaAgenda = req.body
      const agendaExistente = this.db.findById(id)
      if (!agendaExistente) {
        return res.status(404).json({ message: 'Agenda não encontrada' })
      }

      try {
        this.db.update(id, novaAgenda)
        res.json({ message: 'Agenda atualizada com sucesso' })
      } catch (error) {
        res.status(500).json({ message: 'Erro ao atualizar a agenda', error: error.message })
      }
    })

    router.delete('/:id', (req, res) => {
      const { id } = req.params
      const agendaExistente = this.db.findById(id)
      if (!agendaExistente) {
        return res.status(404).json({ message: 'Agenda não encontrada' })
      }

      try {
        this.db.delete(id)
        res.json({ message: 'Agenda removida com sucesso' })
      } catch (error) {
        res.status(500).json({ message: 'Erro ao remover a agenda', error: error.message })
      }
    })

    return router
  }
}
