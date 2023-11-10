//importando o express
import express from 'express'
// criando uma instância
const app = express()

// indica para o express ler body com json
app.use(express.json())

//criar rota padrão ou raiz

app.get('/',(req,res) => {
    res.send('Rota Raiz')
})

//mock cliente
const cliente = [
    {idCliente:1,nome:"Marcos",documento:239232,email:"marquinho@hotmail.com",senha:"abacaxi"},
    {idCliente:2,nome:"Vitor",documento:99999232,email:"vitinho@hotmail.com",senha:"pedra"}
]

//retorna o objeto pelo id
function buscarClientePorId(id){
    return cliente.filter(cliente => cliente.idCliente == id)
}

// retorna a posição do id que estamos procurando no postaman
function buscarIndexSelecao(id){
    return cliente.findIndex(cliente => cliente.idCliente == id)
}

//criar rota cliente
app.get('/cliente',(req,res) => {
    //status 200 referencia a sucesso
    res.status(200).send(cliente)
})

app.post('/cliente',(req,res) => {
    cliente.push(req.body)
    res.status(201).send('Cliente Cadastrado com Sucesso')
})

// resposta a requisição tem que ser um json que pegamos da função buscarSelecaoPorID e cujo resposta tem que ser um parametro da requisição ( o :idCliente da rota)
app.get('/Cliente/:idCliente',(req,res)=>{
    res.json(buscarClientePorId(req.params.idCliente))
})

// utiliza splice para remover elemento e utiliza função buscarindexselecao para pegar a posição inicial do parametro do postman.
app.delete('/Cliente/:id', (req,res)=>{
    cliente.splice(buscarIndexSelecao(req.params.idCliente),1)
    res.send(`Cliente com id ${req.params.idCliente} Excluido com sucesso`)
})

app.put('/Cliente/:id', (req,res)=>{
    let index = buscarIndexSelecao(req.params.id)
    cliente[index].nome = req.body.nome
    cliente[index].documento = req.body.documento
    cliente[index].email = req.body.email
    cliente[index].senha = req.body.senha

    res.json(cliente)
})

//exportando a instância
export default app