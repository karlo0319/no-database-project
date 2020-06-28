const express = require('express');
const app = express();
const choicesCtrl = require('./choicesController');
const plateCtrl = require('./plateController');
const SERVER_PORT = 7777;

app.use(express.json())

app.get('/api/foodchoices', choicesCtrl.getAllChoices)

app.get('/api/foodchoices/:food_id', plateCtrl.getChoiceByID)

app.listen(SERVER_PORT, () => 
    console.log(`Server running in port ${SERVER_PORT}`)
)