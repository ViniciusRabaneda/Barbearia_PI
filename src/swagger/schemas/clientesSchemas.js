export const clientesSchema = {
    type: "object",
    required: ["idCliente", "nomeCliente", "cpfCliente", "emailCliente", "senhaCliente" ],
    properties: {
        idCliente: {
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
        idCliente: 1,
        nomeCliente: "Pedro",
        cpfCliente: "423.134.596-71",
        emailCliente: "pedrinhodopneu@gmaidCliente, nomeCliente, cpfCliente, emailCliente, senhaClienteil.com",
        senhaCliente: "palmeirasnaotemmundial",
    },
}