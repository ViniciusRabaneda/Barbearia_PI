// criando a classe Cliente e exportando para outros arquivos
export default class Cliente{
    constructor(id, nomeCliente, cpfCliente, emailCliente, senhaCliente){
        this.id = id
        this.nomeCliente = nomeCliente
        this.cpfCliente = cpfCliente
        this.emailCliente = emailCliente
        this.senhaCliente = senhaCliente
    }
}
