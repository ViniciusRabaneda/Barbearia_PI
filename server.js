//importando o app do arquivo app.js
import app from './src/routes/cliente.js'
//atribuindo uma porta ao servidor, letra maiuscula porque é constante
const PORT = 3000

//escutar a porta 3000
app.listen(PORT,(req,res) => {
    console.log(`Servidor Rodando no Endereço http://localhost:${PORT}`)
})
