// criando a classe Cliente e exportando para outros arquivos
export default class Cliente{
    constructor(idCliente, nomeCliente, documentoCliente, emailCliente, senhaCliente){
        this.idCliente = idCliente
        this.nomeCliente = nomeCliente
        this.documentoCliente = documentoCliente
        this.emailCliente = emailCliente
        this.senhaCliente = senhaCliente
    }
}
