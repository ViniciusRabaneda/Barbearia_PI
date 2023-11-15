import BaseModel from "./BaseModel.js"
import Agenda from "./agenda.js"

export default class AgendamentoModel extends BaseModel {
    constructor(db) {
        super(db, 'agendamento')
    }

    validarAgendamento(idFuncionario, horarioInicio, horarioFim) {
        const horariosDisponiveisFuncionario = this.db['horarios'].find(horario => horario.idFuncionario === idFuncionario);
        if (horariosDisponiveisFuncionario) {
          const horarios = horariosDisponiveisFuncionario.horarios;
          const horarioInicioIndex = horarios.indexOf(horarioInicio);
          const horarioFimIndex = horarios.indexOf(horarioFim);
          if (horarioInicioIndex !== -1 && horarioFimIndex !== -1 && horarioInicioIndex < horarioFimIndex) {
            const horariosAgendados = this.db[this.entity].filter(agendamento =>
              agendamento.idFuncionario === idFuncionario &&
              ((agendamento.horarioInicio >= horarioInicio && agendamento.horarioInicio < horarioFim) ||
              (agendamento.horarioFim > horarioInicio && agendamento.horarioFim <= horarioFim))
            );
            return horariosAgendados.length === 0;
          }
        }
        return false;
      }
    
      adicionarAgendamento(idCliente, idFuncionario, idServico, horarioInicio, horarioFim) {
        const novoIdAgenda = this.db[this.entity].length + 1; // sempre vai gerar um novo idAgenda (cada agendamento é diferente um do outro)
        const novoAgendamento = new Agenda(novoIdAgenda, idCliente, idFuncionario, idServico, horarioInicio, horarioFim);
    
        if (this.validarAgendamento(idFuncionario, horarioInicio, horarioFim)) {
          this.create(novoAgendamento);
          return 'Agendamento adicionado com sucesso!';
        } else {
          return 'Horário indisponível para agendamento.';
        }
      }
    
      update(idAgenda, novosDetalhes) {
        const agendamentoExistente = this.findById(idAgenda);
        if (agendamentoExistente) {
          const index = this.db[this.entity].indexOf(agendamentoExistente);
          this.db[this.entity][index] = { ...agendamentoExistente, ...novosDetalhes };
          return 'Agendamento atualizado com sucesso!';
        } else {
          throw Error('O agendamento informado não existe.');
        }
      }
    
      delete(idAgenda) {
        const agendamentoExistente = this.findById(idAgenda);
        if (agendamentoExistente) {
          const index = this.db[this.entity].indexOf(agendamentoExistente);
          this.db[this.entity].splice(index, 1);
          return 'Agendamento removido com sucesso!';
        } else {
          throw Error('O agendamento informado não existe.');
        }
      }
    }


