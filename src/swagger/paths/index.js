import {funcionariosPath, getDeletePutServiceById} from "./funcionarios.js"
import { servicosPath, getDeletePutServicesById } from "./servicos.js"
import { clientesPath, getDeletePutClientesById } from "./clientesPath.js"
import { agendaPath, getDeletePutAgendaById} from "./agendaPath.js"

export default {
    '/funcionarios': funcionariosPath,
    '/funcionarios{id}': getDeletePutServiceById,
    '/servicos': servicosPath,
    '/servicos/{id}': getDeletePutServicesById,
    '/clientes':clientesPath,
    '/clientes/{id}': getDeletePutClientesById,
    '/agendamento': agendaPath,
    '/agendamento/{id}': getDeletePutAgendaById
}