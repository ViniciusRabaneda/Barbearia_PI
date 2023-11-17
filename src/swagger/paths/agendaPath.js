export const agendaPath = {
    get: {
        description: "Obter todas as informações de agendamento",
        tags: ["Agenda"],
        responses: {
            200: {
                description: "Lista de Agendamento",
                content: {
                    "application/json": {
                        schema: {
                            type: "array",
                            items: {
                                $ref: "#/schemas/agendaSchema",
                            },
                        },
                    },
                },
            },
            500: {
                description: "Erro interno - Agenda não encontrada",
            },
        },
    },
    post: {
        description: "Criar um novo agendamento",
        tags: ["Agenda"],
        requestBody: {
            required: true,
            content: {
                "application/json": {
                    schema: {
                        $ref: "#/schemas/agendaSchema",
                    },
                },
            },
        },
        responses: {
            200: {
                description: "Agendamento criado com sucesso",
                content: {
                    "application/json": {
                        schema: {
                            $ref: "#/schemas/agendaSchema",
                        },
                    },
                },
            },
            500: {
                description: "Erro interno - Agendamento não realizado ",
            },
        },
    }
}

export const getDeletePutAgendaById = {

    get: {
        description: "Retorna um agendamento pelo ID",
        tags: ["Agenda"],
        parameters: [{
            name: "id",
            in: "path",
            description: "Id da agenda",
            required: true,
            schema: {
                type: "integer"
            }
        }],

        responses: {
            200: {
                description: "Agenda",
                content: {
                    "application/json": {
                    schema: {
                        $ref: "#/schemas/agendaSchema",
                    },
                },
            },
        },
        500:{
                description: "Erro interno",
            },
        },
    },
    delete: {

        description: "Deleta um agendamento pelo id",
        tags: ["Agenda"],
        parameters: [{
            name: "id",
            in: "path",
            description: "Id do agendamento",
            required: true,
            schema: {
                type: "integer"
            }
        }],

        responses: {
            200: {
                description: "Agendamento Deletado com sucesso!",
                    content: {
                        "application/json": {
                            message: "Agendamento removido com sucesso"
                        },
                    },
                },
            500:{
                description: "Erro interno",
            },
        },
    },
    put: {
        description: "Atualiza um agendamento pelo ID",
        tags: ["Agenda"],
        parameters: [{
            name: "id",
            in: "path",
            description: "Id da Agenda",
            required: true,
            schema: {
                type: "integer"
            }
        }],

        requestBody: {
            required: true,
            content: {
                "application/json": {
                    schema: {
                    $ref: "#/schemas/agendaSchema",
                    },
                },
            },
        },
        responses:{
            200:{
                description: "O agendamento foi realizado",
                content: {
                    "application/json": {
                        schema: {
                            $ref: "#/schemas/agendaSchema",
                        },
                    },
                },
            },
            500: {
                description: "Erro interno",
            },
        },
    }
}

