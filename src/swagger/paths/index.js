import funcionarios from "./funcionarios.js"
import { servicosPath, getDeletePutServicesById } from "./servicos.js"
import { clientesPath, getDeletePutClientesById } from "./clientesPath.js"

export default {
    '/funcionarios': funcionarios,
    '/servicos': servicosPath,
    '/servicos/{id}': getDeletePutServicesById,
    '/clientes':clientesPath,
    '/clientes/{id}': getDeletePutClientesById
}