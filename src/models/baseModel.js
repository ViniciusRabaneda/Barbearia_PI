export default class BaseModel {
    constructor(db, entity) {
        this.db = db
        this.entity = entity
    }

    findAll() {
        return this.db[this.entity]
    }

    findById(id) {
        return this.db[this.entity].find(item => item.id === id)
    }

    create(item) {
        return this.db[this.entity].push(item)
    }

    update(id, item) {
        const index = this.db[this.entity].findIndex(item => item.id === id)
        if (index === -1) {
            throw Error('O registro informado não existe')
        }
        this.db[this.entity][index] = item
        return this.db[this.entity][index]
    }

    delete(id) {
        const index = this.db[this.entity].findIndex(item => item.id === id)
        if (index === -1) {
            throw Error('O registro informado não existe')
        }
        this.db[this.entity].splice(index, 1)
        return true
    }
}