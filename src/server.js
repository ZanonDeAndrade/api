const express = require("express");
const dataSource = require('./db.js');
const Agenda = require('./agendaEntity')
const agendaRepository = dataSource.getRepository(Agenda);
require('dotenv').config()

const app = express()
app.use(express.json());


app.get('/agenda', async (req, res) => {
    const items = await agendaRepository.find({
      where: {
        data: req.query.data,
        barbeiro: req.query.barbeiro,
      }
    })
    res.send(items)
  })
  
  
  app.post('/agenda', async (req, res) => {
    const doc = agendaRepository.create(req.body);
    const response = await agendaRepository.save(doc);
  
    res.send(response)
  })
  


app.listen(process.env.PORT, () => {
    console.log ("Servidor Iniciado")
})
