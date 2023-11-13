import BaseModel from "./BaseModel.js"

export default class ServiceModel extends BaseModel {
    constructor(db) {
        super(db, 'servicos')
    }

    findAllByUserId(serviceId) {
        return this.db[this.entity].filter(item => item.usuarioId === serviceId)
    }
}