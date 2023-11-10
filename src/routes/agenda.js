import { Router } from "express";
import AgendaFuncionario from "../models/AgendaFuncionario";

export default class AgendaFuncionarioController {
  constructor(db) {
    this.db = db; 
  }

  routes() {
    const router = Router();

    router.get('/', (req, res) => {
      res.json(this.db.agendaJP);
    });

    router.get('/:idAgenda', (req, res) => {
      const { idAgenda } = req.params;
      const agenda = this.db.agendaJP.find(agenda => agenda.idFuncionario === parseInt(idAgenda));
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

    router.put('/:idAgenda', (req, res) => {
      const { idAgenda } = req.params;
      const novaInfoAgenda = req.body;

      this.db.updateAgenda(parseInt(idAgenda), novaInfoAgenda);

      res.json(novaInfoAgenda);
    });

    router.delete('/:idAgenda', (req, res) => {
      const { idAgenda } = req.params;

      this.db.deleteAgenda(parseInt(idAgenda));

      res.json({ message: 'Agenda removida com sucesso' });
    });

    return router;
  }
}
