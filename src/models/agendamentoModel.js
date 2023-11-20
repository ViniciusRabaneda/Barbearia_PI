import BaseModel from "./baseModel.js";

export default class AgendamentoModel extends BaseModel {
  constructor(db) {
    super(db, 'agendamento');
  }

  validarAgendamento(idFuncionario, horarioInicio, horarioFim) {
    const horariosDisponiveis = this.db.horarios[0]; 

    // Verifica se o horário de início e fim está dentro dos horários disponíveis
    if (
        !horariosDisponiveis.verificarHorarioDisponivel(horarioInicio) ||
        !horariosDisponiveis.verificarHorarioDisponivel(horarioFim)
    ) {
        return false;
    }
    
    // Verifica se o horário de início e fim são diferentes e se o horário de fim sempre é maior que o horario de inicio.
    if (horarioFim <= horarioInicio || horarioInicio === horarioFim) {
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
      return false; 
    }

    // Verificar se a diferença de horários é de no máximo 1 hora
    const horaInicio = new Date(`01/01/2000 ${horarioInicio}`);
    const horaFim = new Date(`01/01/2000 ${horarioFim}`);
    const diferencaEmMilissegundos = Math.abs(horaFim - horaInicio);
    const diferencaEmMinutos = diferencaEmMilissegundos / (1000 * 60);

    if (diferencaEmMinutos > 60) {
        return false;
    }

    return true;
  }
}
