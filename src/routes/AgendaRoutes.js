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
      const agenda = this.db.findById(req.params.id)
      if(!agenda){
        res.status(404).json({ message: 'Agenda não encontrada, digite novamente'})
      } else{
        res.json(agenda)
      }

    })
    router.post('/', (req, res) => {
      const novoAgendamento = req.body
      this.db.create(novoAgendamento)
      res.json(novoAgendamento)
    })

    router.put('/:id', (req, res) => {
      const { id } = req.params
      const agenda = req.body
      if(!agenda){
        res.status(404).json({ message: 'Agenda não encontrada, digite novamente'})
      } else{
        this.db.update(id, agenda)
        res.json(agenda)
      }
    })

    router.delete('/:id', (req, res) => {
      const { id } = req.params
      this.db.delete(id)
      res.json({ message: 'Agenda marcada removida com sucesso' })

    })
    return router
  }
}





  
