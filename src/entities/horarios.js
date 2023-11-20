export default class HorariosDisponiveis {
    constructor(idFuncionario, horarios) {
      this.idFuncionario = idFuncionario;
      this.horarios = horarios;
    }
  
    verificarHorarioDisponivel(horario) {
      return this.horarios.includes(horario);
    }
  }