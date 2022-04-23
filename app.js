// Usando objeto express
const express = require('express')
// App de Express
const app = express()
// Puerto en el que vamos a ver nuestra app: localhost:3000
const port = 3000

// path inicial, respondera a la url localhost:3000
app.get('/', (req, res)=>{
  res.send('Hello World')
})

// Con esto inicializamos la const app = express()
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});

// Respondiendo texto
// localhost:3000/launchx
app.get('/launchx', (req,res) => {
  res.send('Bienvenidos a LaunchX')
})

// Regresando un objeto
// localhost:3000/explorersInNode
app.get('/explorersInNode', (req,res) => {
  const explorer = {name: 'explorer', msg: 'hello'}
  res.send(explorer)
})

// Query Params: Recibir parametros por la url
// http://localhost:3000/explorers/ruben
// req.params = {'explorerName':'ruben'}
app.get('/explorers/:explorerName', (req,res) => {
  res.send(req.params)
})
