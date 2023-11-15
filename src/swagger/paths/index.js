import funcionarios from "./funcionarios.js"
import { servicosPath, getDeletePutServicesById } from "./servicos.js"

export default {
    '/funcionarios': funcionarios,
    '/servicos': servicosPath,
    '/servicos/{id}': getDeletePutServicesById
}