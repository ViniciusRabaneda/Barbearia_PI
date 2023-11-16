import { Router } from "express";
import AgendamentoModel from "../models/agendamentoModel.js";
// Validar
export default class AgendaRoutes {
  constructor(db) {
    this.db = db; 
  }

  routes() {
    const router = Router();

    router.get('/', (req, res) => {
      res.json(this.db.agendaJP);
    });

    router.get('/:id', (req, res) => {
      const { id } = req.params;
      const agenda = this.db.agendaJP.find(agenda => agenda.idFuncionario === parseInt(id));
      if (!agenda) {
        res.status(404).json({ message: 'Agenda não encontrada' });
      } else {
        res.json(agenda);
      }
    });

    router.post('/', (req, res) => {
      const novaAgenda = req.body;

      // Ver com o professor a lógica para adicionar a nova agenda ao banco de dados
      this.db.createAgenda(novaAgenda);

      res.json(novaAgenda);
    });

    router.put('/:id', (req, res) => {
      const { id } = req.params;
      const novaInfoAgenda = req.body;

      this.db.updateAgenda(parseInt(id), novaInfoAgenda);

      res.json(novaInfoAgenda);
    });

    router.delete('/:id', (req, res) => {
      const { id } = req.params;

      this.db.deleteAgenda(parseInt(id));

      res.json({ message: 'Agenda removida com sucesso' });
    });

    return router;
  }
}
