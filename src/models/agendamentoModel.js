import BaseModel from "./BaseModel.js"

export default class AgendamentoModel extends BaseModel {
    constructor(db) {
        super(db, 'agendamento') 
    }

    findAllByAgendaId(id) {
      return this.db[this.entity].filter(item => item.id == id)
  }

    adicionarAgendamento(id,idCliente, idFuncionario, idServico, horarioInicio, horarioFim) {
        const novoAgendamento = {
            id: IdAgenda,
            idCliente: idCliente,
            idFuncionario: idFuncionario,
            idServico: idServico,
            horarioInicio: horarioInicio,
            horarioFim: horarioFim
          
        }

        this.create(novoAgendamento);
        return 'Agendamento adicionado com sucesso!'
    }

    
}
