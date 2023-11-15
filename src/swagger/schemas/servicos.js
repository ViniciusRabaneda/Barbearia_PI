export const servicosSchema = {
    type: "object",
    required: ["id", "idCliente", "corteCabelo", "barba", "sobrancelha", "corteBarba", "corteSobrancelha", "corteBarbaSobrancelha", "pigmentacao", "undercutFem"],
    properties: {
        id: {
            type: "number",
            description: "ID do serviço",
        },
        idCliente: {
            type: "number",
            description: "ID do cliente",
        },
        corteCabelo: {
            type: "boolean",
            description: "Tipo de corte: corte de cabelo",
        },
        barba: {
            type: "boolean",
            description: "Tipo de corte: somente barba",
        },
        sobrancelha: {
            type: "boolean",
            description: "Tipo de corte: somente sobrancelha",
        },
        corteBarba: {
            type: "boolean",
            description: "Tipo de corte: cabelo e barba",
        },
        corteSobrancelha: {
            type: "boolean",
            description: "Tipo de corte: cabelo e sobrancelha",
        },
        corteBarbaSobrancelha: {
            type: "boolean",
            description: "Tipo de corte: cabelo, barba e sobrancelha",
        },
        pigmentacao: {
            type: "boolean",
            description: "Tipo de corte: Pigmentação",
        },
        undercutFem: {
            type: "boolean",
            description: "Tipo de corte: undercut feminino",
        },
    },
    example: {
        id: 1,
        idCliente: 1,
        corteCabelo: false,
        barba: false,
        sobrancelha: false,
        corteBarba: false,
        corteSobrancelha: true,
        corteBarbaSobrancelha: false,
        pigmentacao: false,
        undercutFem: false,
    },
}