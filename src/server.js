//importando o app do arquivo app.js
import db from './dataBase/config.js'
import app from './routes/cliente.js'
import ServicesRoute from './routes/cliente.js'
//atribuindo uma porta ao servidor, letra maiuscula porque é constante
const PORT = 3000

//escutar a porta 3000
const rotaServices = new ServicesRoute(db)
app.use('/servicos', rotaServices.routes());

app.listen(PORT,(req,res) => {
    console.log(`Servidor Rodando no Endereço http://localhost:${PORT}`)
})