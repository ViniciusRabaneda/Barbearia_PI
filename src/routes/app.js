//importando o express
import express from 'express'
// criando uma instância
const app = express()


//criar rota padrão ou raiz

app.get('/',(req,res) => {
    res.send('Rota Raiz')
})

//mock cliente
const cliente = [
    {idCliente:1,nome:"Marcos",documento:239232,email:"marquinho@hotmail.com",senha:"abacaxi"},
    {idCliente:2,nome:"Vitor",documento:99999232,email:"vitinho@hotmail.com",senha:"pedra"}
]

//criar rota cliente
app.get('/cliente',(req,res) => {
    //status 200 referencia a sucesso
    res.status(200).send(cliente)
})

//criar rota funcionario
app.get('/funcionario',(req,res) => {
    res.send('Lista de Funcionarios')
})

//criar rota servico
app.get('/servico',(req,res) => {
    res.send('Lista de Serviços')
})

//criar rota agenda
app.get('/agenda',(req,res) => {
    res.send('Agenda do dia')
})

//criar rota agenda funcionario
app.get('/agendafuncionario',(req,res) => {
    res.send('Agenda do Funcionário')
    
})
//exportando a instância
export default app

