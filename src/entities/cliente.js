// criando a classe Cliente e exportando para outros arquivos
export default class Cliente{
    constructor(idCliente, nomeCliente, cpfCliente, emailCliente, senhaCliente){
        this.idCliente = idCliente
        this.nomeCliente = nomeCliente
        this.cpfCliente = cpfCliente
        this.emailCliente = emailCliente
        this.senhaCliente = senhaCliente
    }
}
