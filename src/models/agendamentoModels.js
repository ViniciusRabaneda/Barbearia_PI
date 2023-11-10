import BaseModel from "./baseModel.js"

// Validar
export default class AgendamentoModel extends BaseModel {
    constructor(db) {
        super(db, 'agendamento')
    }

}