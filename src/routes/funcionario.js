import express from 'express'
const app = express()
const port = 3000

app.use(express.json())

app.get('/',(req,res) => {
    res.send('Rota Raiz')
})

const funcionario = [
    {idFuncionario: 1, nome: "João", cpf: "000000000", rg: "111111111", email: "joão@gmail.com", endereco: "rua abc, número 1", pis: "1010101", horarioExpediente: "8:00 as 17:00", salario: 1900},
    {idFuncionario: 2, nome: "Pedro", cpf: "000000001", rg: "222222222", email: "pedro@gmail.com", endereco: "rua abc, número 2", pis: "2020202", horarioExpediente: "8:00 as 15:00", salario: 1900}
]

function buscarFuncionarioPorId(id){
    return funcionario.filter(funcionario => funcionario.idFuncionario == id)
}

function buscarIndexSelecao(id){
    return funcionario.findIndex(funcionario => funcionario.idFuncionario == id)
}

app.get('/funcionario', (req, res) => {
    res.status(200).send(funcionario);
})

app.post('/funcionario',(req,res) => {
    funcionario.push(req.body)
    res.status(201).send("Funcionário Cadastrado com Sucesso!")
})

app.get('/Funcionario/:idFuncionario',(req,res) => {
    res.json(buscarFuncionarioPorId(req.params.idFuncionario))
})

app.delete('/Funcionario/:id',(req,res) => {
    funcionario.splice(buscarIndexSelecao(req.params.idFuncionario),1)
    res.send(`Funcionário com id ${req.params.idFuncionario} excluido com sucesso`)
})

export default app