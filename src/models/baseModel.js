// criando um caminho "universal" para realizar alterações dentro do BD original

export default class BaseModel {
    // Chama o db e a entidade correspondente
    constructor(db, entity) {
        this.db = db
        this.entity = entity
    }

// Traz todos os dados da entidade correspondente
    findAll() {
        return this.db[this.entity]
    }
// Traz os dados da entidade pelo id
    findById(id) {
        return this.db[this.entity].find(item => item.id === id)
    }
// cria um novo cadastro
    create(item) {
        return this.db[this.entity].push(item)
    }
// altera um cadastro existente
    update(id, item) {
        const index = this.db[this.entity].findIndex(item => item.id === id)
        if (index === -1) {
            throw Error('O registro informado não existe')
        }
        this.db[this.entity][index] = item
        return this.db[this.entity][index]
    }
// apaga um cadastro usando o splice

    delete(id) {
        const index = this.db[this.entity].findIndex(item => item.id === id)
        if (index === -1) {
            throw Error('O registro informado não existe')
        }
        this.db[this.entity].splice(index, 1)
        return true
    }
}