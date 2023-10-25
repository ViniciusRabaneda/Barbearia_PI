class AgendaFuncionario{
    constructor(idFuncionario,diaSemana,horarioEntrada,horarioSaida){
        this.idFuncionario = idFuncionario // chave estrangeira
        this.diaSemana = diaSemana   // os horarios disponíveis para aquela semana
        this.horarioEntrada = horarioEntrada// o horário que o funcionario inicia o trabalho
        this.horarioSaida = horarioSaida // o horário que o funcionário finaliza o trabalho
    }
}
