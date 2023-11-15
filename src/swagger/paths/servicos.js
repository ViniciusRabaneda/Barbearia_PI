export const servicosPath = {
    get: {
        description: "Retorna a lista de servicos",
        tags: ["Servicos"],
        responses: {
            200: {
                description: "Lista de servicos",
                content: {
                    "application/json": {
                        schema: {
                            type: "array",
                            items: {
                                $ref: "#/schemas/servicosSchema",
                            },
                        },
                    },
                },
            },
            500: {
                description: "Erro interno",
            },
        },
    },
    post:{
        description: "Adiciona novo servico",
        tags: ["Servicos"],
        requestBody: {
            required: true,
            content: {
                "application/json": {
                    schema: {
                        $ref: "#/schemas/servicosSchema",
                    },
                },
            },
        },
        responses: {
            200: {
                description: "Servico solicitado",
                content: {
                    "application/json": {
                        schema: {
                            $ref: "#/schemas/servicosSchema",
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
export const getDeletePutServicesById = {

    get: {
        description: "Retorna um servico pelo Id",
        tags: ["Servicos"],
        parameters: [{
            name: "id",
            in: "path",
            description: "Id do servi?o",
            required: true,
            schema: {
                type: "integer"
            }
        }],

        responses: {
            200: {
                description: "Servi?o",
                content: {
                    "application/json": {
                    schema: {
                        $ref: "#/schemas/servicosSchema",
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

        description: "Deleta um servico pelo id",
        tags: ["Servicos"],
        parameters: [{
            name: "id",
            in: "path",
            description: "Id do servico",
            required: true,
            schema: {
                type: "integer"
            }
        }],

        responses: {
            200: {
                description: "Deletado com sucesso!",
                    content: {
                        "application/json": {
                            message: "Servico removido com sucesso"
                        },
                    },
                },
            500:{
                description: "Erro interno",
            },
        },
    },
    put: {
        description: "Cria uma nova solicitacao de servico",
        tags: ["Servicos"],
        parameters: [{
            name: "id",
            in: "path",
            description: "Id do servico",
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
                    $ref: "#/schemas/servicosSchema",
                    },
                },
            },
        },
        responses:{
            200:{
                description: "O servico foi criado",
                content: {
                    "application/json": {
                        schema: {
                            $ref: "#/schemas/servicosSchema",
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
