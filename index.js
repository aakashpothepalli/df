const express = require('express')
const {WebhookClient} = require('dialogflow-fulfillment')
const {dialogflow} = require('actions-on-google')
const {getIntents} = require('./intents')

const app = express()



app.get('/', (req, res) => {
    res.send('hellp world')
})

app.post('/dialogflow', express.json(), getIntents())

app.listen(process.env.PORT || 8000)