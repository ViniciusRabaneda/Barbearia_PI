const funcionarios = {
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

export default funcionarios