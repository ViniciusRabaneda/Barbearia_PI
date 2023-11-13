// importando o Basemodel que puxa dados do Banco de dados orignal (config)
import BaseModel from "./BaseModel.js"

// Cria a Classe ClienteModel e puxa referência do "pai" Basemodel
export default class FuncionarioModel extends BaseModel {
    constructor(db) {
// o super puxa o constructor do Basemodel
// herda também os métodos da classe basemodel (CRUD)
// o nome entre aspas deve ser igual ao do config.js
        super(db, 'funcionarios')
    }
// acrescenta o método findallbyclientID
    findAllByFuncionarioId(idFuncionario) {
        return this.db[this.entity].filter(item => item.idFuncionario === idFuncionario)
    }
}