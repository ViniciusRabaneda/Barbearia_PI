// importando o Basemodel que puxa dados do Banco de dados orignal (config)
import BaseModel from "./baseModel.js"

// Cria a Classe ClienteModel e puxa referência do "pai" Basemodel
export default class ClienteModel extends BaseModel {
    constructor(db) {
// o super puxa o constructor do Basemodel
// herda também os métodos da classe basemodel (CRUD)
// o nome entre aspas deve ser igual ao do config.js
        super(db, 'clientes')
    }
// acrescenta o método findallbyclientID
    findAllByClientId(id) {
        return this.db[this.entity].filter(item => item.id== id)
    }
}
