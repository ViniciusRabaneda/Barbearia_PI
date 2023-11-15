export const funcionariosPath = {
    get: {
        description: "Retorna a lista de funcionários",
        tags: ["Funcionários"],
        responses: {
            200: {
                description: "Lista de funcionários",
                content: {
                    "application/json": {
                        schema: {
                            type: "array",
                            items: {
                                $ref: "#/schemas/Funcionario",
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
    post: {
        description: "Adiciona novo funcionário",
        tags: ["Funcionários"],
        requestBody: {
            required: true,
            content: {
                "application/json": {
                    schema: {
                        $ref: "#/schemas/Funcionario",
                    },
                },
            },
        },
        responses: {
            200: {
                description: "Funcionário adicionado",
                content: {
                    "application/json": {
                        schema: {
                            $ref: "#/schemas/Funcionario",
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

export const getDeletePutServiceById = {

    get: {
        description: "Retorna um funcionário pelo Id",
        tags: ["Funcionários"],
        parameters: [{
            name: "id",
            in: "path",
            description: "Id do funcionário",
            required: true,
            schema: {
                type: "integer"
            }
        }],

        responses: {
            200: {
                description: "Funcionario",
                content: {
                    "application/json": {
                        schema: {
                            $ref: "#/schemas/Funcionario",
                        },
                    },
                },
            },
            500: {
                description: "Erro interno",
            },
        },
    },

    delete: {

        description: "Deleta um funcionário pelo id",
        tags: ["Funcionários"],
        parameters: [{
            name: "id",
            in: "path",
            description: "Id do funcionário",
            required: true,
            schema: {
                type: "integer"
            },
        }],

        responses:{
            200: {
                description: "Deletado com sucesso!",
                content: {
                    "application/json": {
                        message: "Funcionario removido com sucesso"
                    },
                },
            },
            500: {
                description: "Erro interno",
            },
        },
    },

    put: {
        description: "Atualiza um funcionário existente",
        tags: ["Funcionários"],
        parameters: [{
            name: "id",
            in: "path",
            description: "Id do funcionário",
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
                        $ref: "#/schemas/Funcionario",
                    },
                },
            },
        },

        responses: {
            200: {
                description: "O funcionário foi atualizado",
                content: {
                    "application/json": {
                        schema: {
                            $ref: "#/schemas/Funcionario",
                        },
                    },
                },
            },
            500: {
                description: "Erro interno",
            },
        },
    },
}
