import BaseModel from "./baseModel.js"

// Validar
export default class AgendaModel extends BaseModel {
    constructor(db) {
        super(db, 'agendaJP')
    }
    findAllByUserId(agendaID) {
        return this.db[this.entity].filter(item => item.usuarioId === agendaID)
    }

}
