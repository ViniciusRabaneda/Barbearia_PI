//importando o app do arquivo app.js
import express from 'express'
import db from './dataBase/config.js'
import ServicesRoute from './routes/services.js'
//atribuindo uma porta ao servidor, letra maiuscula porque é constante

const app = new express()
app.use(express.json())

const rotaServices = new ServicesRoute(db)
app.use('/servicos', rotaServices.routes());

//escutar a porta 3000
app.listen(3000,() => {
    console.log("Servidor Rodando no Endereço http://localhost:3000")
})
