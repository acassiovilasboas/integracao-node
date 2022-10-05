// importando os serviços da lib express
const express = require('express')

// atribuindo a constante server as funcionalidades
// da função express()
const server = express()
server.use(express.json())

// nosso array de comensais
const deathEaters = [
    "Aleto Carrow",
    "Antônio Dolohov",
    "Avery Jr",
    "Belatriz Lestrange", 
    "Draco Malfoy", 
    "Igor Karkaroff", 
    "Pedro Pettigrew"
]

// criando a rota
server.get('/', (req, res) => {
    return res.json( { message: "resposta da minha api" } )
})

// outra rota
server.get('/comensais', (req, res) => {
    return res.json(deathEaters)
})

// habilitando a porta 3000 para responder como
// servidor da aplicação
server.listen(process.env.PORT)