import BaseModel from "./baseModel.js"

export default class AgendamentoModel extends BaseModel {
    constructor(db) {
        super(db, 'agendamento') 
    }
}
