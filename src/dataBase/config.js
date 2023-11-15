// importa todas as classes criadas
import Servico from "../entities/servico.js"
import Cliente from "../entities/Cliente.js"
import Funcionario from "../entities/Funcionario.js"
import Agenda from "../entities/agenda.js"
import HorariosDisponiveis from "../entities/Horarios.js"

// Cria um banco de dados baseado nas classes importadas e guarda na memória do computador

const db = {
  servicos: [
    new Servico(1, 2, true, false, false, false, false, false, false, false),
    new Servico(2, 1, false, false, false, true, false, false, false, false),
    new Servico(3, 3, false, false, false, false, true, false, false, false)

  ],
  clientes: [
    new Cliente(1,"Marcos",239232,"marquinho@hotmail.com","abacaxi"),
    new Cliente(2,"Luis",40028922,"luisito@hotmail.com","Luz"),
    new Cliente(3,"Marcelo",88839382,"marcelinho@gmail.com","Gas")
  ],
  funcionarios: [
    new Funcionario(1,"Rafael",45632334,5064323,"rafael@gmail.com","Rua alcatão 27",5000,"08:00","18:00",5000),
    new Funcionario(2,"Amanda",23232334,66064323,"amanda@gmail.com","Rua Ruy Barbosa 47",6000,"08:00","18:00",4500)
  ],
  horarios: [
    new HorariosDisponiveis(1,['09:00','09:30','10:00','10:30','11:00','11:30','12:00','12:30',
    '13:00','14:00','14:30','15:00','15:30','16:00','16:30','17:00','17:30','18:00','19:00'])
  ],
  agendamento: [
    new Agenda(1,1,1,1,'09:00','09:30'), // IdAgenda 1, cliente 1 cortando com o JP e fazendo o serviço 1
    new Agenda(2,1,1,2,'09:30','10:00'), // IdAgenda 2, cliente 1 cortando com o JP e fazendo o serviço 2
    new Agenda(3,2,1,1,'10:00','10:30'), // IdAgenda 3, cliente 2 cortando com o JP e fazendo o serviço 1
    new Agenda(4,2,1,2,'10:30','11:00'), // IdAgenda 4, cliente 2 cortando com o JP e fazendo o serviço 2
    new Agenda(5,3,1,1,'11:00','11:30'), // IdAgenda 5, cliente 3 cortando com o JP e fazendo o serviço 1
    new Agenda(6,3,1,3,'11:30','12:00') // IdAgenda 6, cliente 3 cortando com o JP e fazendo o serviço 3
  ]
}

// exporta o db
export default db

