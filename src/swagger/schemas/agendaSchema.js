export const agendaSchema = {
    type: "object",
    required: ["id", "idCliente", "idFuncionario", "idServico", "horarioInicio", "horarioFim"],
    properties: {
        id: {
            type: "number",
            description: "ID da Agenda",
        },
        idCliente: {
            type: "number",
            description: "ID do Cliente",
        },
        idFuncionario: {
            type: "number",
            description: "ID do Funcionário",
        },
        idServico: {
            type: "number",
            description: "ID do Serviço",
        },
        horarioInicio: {
            type: "string",
            description: "Horário de Início no formato de hora (ex: 11:30)",
        },
        horarioFim: {
            type: "string",
            description: "Horário de Fim no formato de hora (ex: 12:00)",
        },
    },
    example: {
        id: 1,
        nomeCidClienteliente: "2",
        idFuncionario: "1",
        idServico: "4",
        horarioInicio: "11:30",
        horarioFim: "12:00"
    },
}