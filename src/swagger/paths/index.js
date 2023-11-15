import {funcionariosPath, getDeletePutServiceById} from "./funcionarios.js"
import { servicosPath, getDeletePutServicesById } from "./servicos.js"

export default {
    '/funcionarios': funcionariosPath,
    '/funcionarios{id}': getDeletePutServiceById,
    '/servicos': servicosPath,
    '/servicos/{id}': getDeletePutServicesById
}