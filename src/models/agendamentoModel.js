import BaseModel from "./baseModel.js";

export default class AgendamentoModel extends BaseModel {
  constructor(db) {
    super(db, 'agendamento');
  }

  validarAgendamento(idFuncionario, horarioInicio, horarioFim) {
    const horariosDisponiveis = this.db.horarios[0]; // Obtém os horários disponíveis do banco de dados

    // Verifica se o horário de início e fim está dentro dos horários disponíveis
    if (
      !horariosDisponiveis.verificarHorarioDisponivel(horarioInicio) ||
      !horariosDisponiveis.verificarHorarioDisponivel(horarioFim)
    ) {
      return false;
    }

    const agendas = this.findAll();

    // Verificar se já existe um agendamento para o mesmo funcionário no mesmo horário
    const conflito = agendas.some(agenda =>
      agenda.idFuncionario === idFuncionario &&
      (
        (new Date(horarioInicio) >= new Date(agenda.horarioInicio) && new Date(horarioInicio) < new Date(agenda.horarioFim)) ||
        (new Date(horarioFim) > new Date(agenda.horarioInicio) && new Date(horarioFim) <= new Date(agenda.horarioFim))
      )
    );

    if (conflito) {
      return false; // Retorna falso se houver conflito
    }

    // Verificar se a diferença de horários é de no máximo 1 hora
    const horaInicio = new Date(horarioInicio);
    const horaFim = new Date(horarioFim);
    const diferencaEmMilissegundos = Math.abs(horaFim - horaInicio);
    const diferencaEmHoras = diferencaEmMilissegundos / (1000 * 60 * 60);

    if (diferencaEmHoras > 1) {
      return false; // Retorna falso se a diferença de horários for maior que 1 hora
    }

    return true; // Retorna verdadeiro se estiver tudo certo
  }
}
