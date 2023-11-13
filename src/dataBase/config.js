// importa todas as classes criadas
import Servico from "../entities/servico.js"
import Cliente from "../entities/Cliente.js"
import AgendaFuncionario from "../entities/agendaFuncionario.js"
import Funcionario from "../entities/funcionario.js"
import Agenda from "../entities/agenda.js"

// Cria um banco de dados baseado nas classes importadas e guarda na memória do computador

const db = {
  servicos: [
    new Servico(1, true, false, false, false, false, false, false, false),
    new Servico(2, false, false, false, true, false, false, false, false)

  ],
  clientes: [
    new Cliente(1,"Marcos",239232,"marquinho@hotmail.com","abacaxi"),
    new Cliente(2,"Luis",40028922,"luisito@hotmail.com","Luz"),
    new Cliente(3,"Marcelo",88839382,"marcelinho@gmail.com","Gas")
    
  ],
  funcionario: [


  ],
  // Gabriel, coloquei só 1 funcionário porque é só o JP, ai se você for mudar o "id" dele, troca no meu
  // código por favor
  agendaJP: [
    new AgendaFuncionario(1,['09:00','09:30','10:00','10:30','11:00','11:30','12:00','12:30',
    '13:00','14:00','14:30','15:00','15:30','16:00','16:30','17:00','17:30','18:00','19:00'],'08:00','19:30')
  ],
  agendamento: [
    new Agenda(100,1,1,2,'14:00','14:30'),
    new Agenda(100,2,1,1,'14:30','15:00'),
    new Agenda(100,3,1,1,'15:00','15:30'),
    new Agenda(100,4,1,2,'15:30','16:00'),
    new Agenda(100,5,1,1,'16:00','16:30'),
    new Agenda(100,1,1,1,'16:30','17:00'),
    new Agenda(100,1,1,2,'17:00','17:30'),
    new Agenda(100,1,1,2,'17:30','18:00')
  ]
  
}
// exporta o db
export default db