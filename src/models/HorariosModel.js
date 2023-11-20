import BaseModel from "./baseModel.js"

export default class HorariosDisponiveis extends BaseModel {
    constructor(db) {
        super(db, 'horarios')
    }
}
