import Servico from "../entities/servico.js"
import Cliente from "../entities/cliente.js"
import AgendaFuncionario from "../entities/agendaFuncionario.js"
import Funcionario from "../entities/funcionario.js"
import Agenda from "../entities/agenda.js"

const db = {
  servicos: [
    new Servico(1, true, false, false, false, false, false, false, false),
    new Servico(2, false, false, false, true, false, false, false, false)

  ],
  clientes: [
    
  ]
  
}

export default db