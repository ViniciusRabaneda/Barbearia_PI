export const Funcionario = {
    type: "object",
    required: ["id", "nomeFuncionario", "cpfFuncionario", "rgFuncionario", "emailFuncionario", "enderecoFuncionario", "pisFuncionario", "horarioEntradaFuncionario", "horarioSaidaFuncionario", "salarioFuncionario"],
    properties: {
        id: {
            type: "number",
            description: "ID do funcionário",
        },
        nomeFuncionario: {
            type: "string",
            description: "Nome do funcionario",
        },
        cpfFuncionario: {
            type: "string",
            description: "CPF do funcionário",
        },
        rgFuncionario: {
            type: "string",
            description: "RG do funcionario",
        },
        emailFuncionario: {
            type: "string",
            description: "E-mail do funcionário",
        },
        enderecoFuncionario: {
            type: "string",
            description: "Endereço do funcionario",
        },
        pisFuncionario: {
            type: "string",
            description: "Número PIS do funcionário",
        },
        horarioEntradaFuncionario: {
            type: "string",
            description: "Horário de entrada do funcionario",
        },
        horarioSaidaFuncionario: {
            type: "string",
            description: "Horário de saída do funcionário",
        },
        salarioFuncionario: {
            type: "string",
            description: "Salário do funcionario",
        },
    },
    example: {
        id: 1,
        nomeFuncionario: "João",
        cpfFuncionario: "123.456.781-01",
        rgFuncionario: "12.345.678-9",
        emailFuncionario: "joão@gmail.com",
        enderecoFuncionario: "rua abc, número 1",
        pisFuncionario: "12345678910",
        horarioEntradaFuncionario: "08:00",
        horarioSaidaFuncionario: "17:00",
        salarioFuncionario: "1.800,00",
    },
}