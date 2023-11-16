import BaseModel from "./BaseModel.js"

export default class AgendamentoModel extends BaseModel {
    constructor(db) {
        super(db, 'agendamento') 
    }
    /* findAllByAgendaId(id) {
      return this.db[this.entity].filter(item => item.id == id)
    }
    findById(id) {
        return super.findById(id); 
    }
    adicionarAgendamento(id,idCliente, idFuncionario, idServico, horarioInicio, horarioFim) {
        const novoAgendamento = {
            id: id,
            idCliente: idCliente,
            idFuncionario: idFuncionario,
            idServico: idServico,
            horarioInicio: horarioInicio,
            horarioFim: horarioFim
          
        }

        this.create(novoAgendamento);
        return 'Agendamento adicionado com sucesso!'
    }
    update(id, newAgenda) {
        if (typeof this.db.findById === 'function') {
            const agendaExistente = this.db.findById(id);
            if (!agendaExistente) {
                throw new Error('Agenda não encontrada');
            }
            super.update(id, newAgenda);
            return newAgenda;
        } else {
            throw new Error('Método findById não está implementado na instância db');
        }
    }   */
}
