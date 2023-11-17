//importando o app do arquivo app.js
import express from "express"
import db from './src/dataBase/config.js'
import ServicesRoute from './src/routes/services.js'
import ClienteRoutes from './src/routes/ClienteRoutes.js'
import FuncionarioRoutes from "./src/routes/FuncionarioRoutes.js"
import swaggerUi from "swagger-ui-express"
import swaggerDocument from "./src/swagger/config.js"
import AgendaRoutes from "./src/routes/AgendaRoutes.js"

//atribuindo uma porta ao servidor, letra maiuscula porque é constante

const app = new express()

app.use(express.json())


const rotacliente = new ClienteRoutes(db)
// app.use utilizada para indicar o caminho
// utiliza o caminho /clientes como raiz para todas as rotas, mudando só o complemento
app.use('/clientes', rotacliente.routes())


const rotafuncionario = new FuncionarioRoutes(db)
app.use('/funcionarios', rotafuncionario.routes())

const rotaServices = new ServicesRoute(db)
app.use('/servicos', rotaServices.routes())

// Agenda

const rotaAgenda = new AgendaRoutes(db)
app.use('/agendamento', rotaAgenda.routes())

// Swagger
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument, { explorer: true }))

//escutar a porta 3000
app.listen(3000,() => {
    console.log(`Servidor Rodando no Endereço http://localhost:3000`)
})

