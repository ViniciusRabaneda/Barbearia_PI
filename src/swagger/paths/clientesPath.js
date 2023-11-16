export const clientesPath = {
    get: {
        description: "Retorna a lista de Clientes",
        tags: ["Clientes"],
        responses: {
            200: {
                description: "Lista de Clientes",
                content: {
                    "application/json": {
                        schema: {
                            type: "array",
                            items: {
                                $ref: "#/schemas/clientesSchema",
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
        description: "Adiciona novo Cliente",
        tags: ["Clientes"],
        requestBody: {
            required: true,
            content: {
                "application/json": {
                    schema: {
                        $ref: "#/schemas/clientesSchema",
                    },
                },
            },
        },
        responses: {
            200: {
                description: "Cliente adicionado",
                content: {
                    "application/json": {
                        schema: {
                            $ref: "#/schemas/clientesSchema",
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
export const getDeletePutClientesById = {

    get: {
        description: "Retorna um cliente pelo Id",
        tags: ["Clientes"],
        parameters: [{
            name: "id",
            in: "path",
            description: "Id do Cliente",
            required: true,
            schema: {
                type: "integer"
            }
        }],

        responses: {
            200: {
                description: "Clientes",
                content: {
                    "application/json": {
                    schema: {
                        $ref: "#/schemas/clientesSchema",
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

        description: "Deleta um cliente pelo id",
        tags: ["Clientes"],
        parameters: [{
            name: "id",
            in: "path",
            description: "Id do Cliente",
            required: true,
            schema: {
                type: "integer"
            }
        }],

        responses: {
            200: {
                description: "Cliente deletado com sucesso!",
                    content: {
                        "application/json": {
                            message: "Cliente removido com sucesso"
                        },
                    },
                },
            500:{
                description: "Erro interno",
            },
        },
    },
    put: {
        description: "Altera os campos da entidade Cliente",
        tags: ["Clientes"],
        parameters: [{
            name: "id",
            in: "path",
            description: "Id do Cliente",
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
                    $ref: "#/schemas/clientesSchema",
                    },
                },
            },
        },
        responses:{
            200:{
                description: "O Cliente foi criado",
                content: {
                    "application/json": {
                        schema: {
                            $ref: "#/schemas/clientesSchema",
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
