import BaseModel from "./BaseModel.js"

export default class AgendamentoModel extends BaseModel {
    constructor(db) {
        super(db, 'agendamento') 
    }
}
