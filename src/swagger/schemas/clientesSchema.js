export const clientesSchema = {
    type: "object",
    required: ["id", "nomeCliente", "cpfCliente", "emailCliente", "senhaCliente" ],
    properties: {
        id: {
            type: "number",
            description: "ID do Cliente",
        },
        nomeCliente: {
            type: "string",
            description: "Nome do Cliente",
        },
        cpfCliente: {
            type: "string",
            description: "CPF do Cliente",
        },
        emailCliente: {
            type: "string",
            description: "E-mail do Cliente",
        },
        senhaCliente: {
            type: "string",
            description: "Senha do Cliente",
        },
    },
    example: {
        id: 1,
        nomeCliente: "Pedro",
        cpfCliente: "423.134.596-71",
        emailCliente: "pedrinhodopneu@gmaid",
        senhaCliente: "palmeirasnaotemmundial",
    },
}