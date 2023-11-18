import BaseModel from "./baseModel.js"

export default class ServiceModel extends BaseModel {
    constructor(db) {
        super(db, 'servicos')
    }

    findAllByServiceId(id) {
        return this.db[this.entity].filter(item => item.id == id)
    }
}
