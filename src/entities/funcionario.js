export default class Funcionario {
    constructor(idFuncionario, nome, cpf, rg, email, endereco, pis, horarioExpediente, salario){
        this.idFuncionario = idFuncionario;
        this.nome = nome;
        this.cpf = cpf;
        this.rg = rg;
        this.email = email;
        this.endereco = endereco;
        this.pis = pis;
        this.horarioExpediente = horarioExpediente;
        this.salario = salario;
    }      
}