exports.getIntents = () => {
    const {dialogflow, BasicCard} = require('actions-on-google')
    const gapp = dialogflow()
    const stringSimilarity = require('string-similarity');

    gapp.intent('myintent', conv => {
        conv.ask('you are a strange person')
    })

    gapp.intent('getLuckyNumber', async conv => {

        conv.ask(`your lucky number is ${res}`)

        let a = Math.random()
        a = a * 6
    })

    gapp.intent('Default Welcome Intent', conv => {
        conv.ask('welcome ')
    })
    gapp.intent('getTime', conv => {
        conv.ask(`the time is ${new Date().toTimeString()}`)
    })
    gapp.intent('add', conv => {
        let par = conv.parameters
        let numbers = par
            .number
            console
            .log(par)

        let sum = 0
        numbers.map(n => sum += n)

        conv.ask(`Ok sum of ${numbers.map(n => n)} is ${sum} `)
    })

    gapp.intent('marks', async conv => {
        const axios = require('axios');

        let res = await axios.get(
            'https://sis-scraper-rit-dup-2.herokuapp.com/get_sis_data/1MS19CS104/2001-11-11'
        )
        let subjects = await res
            .data
            .marks
            .map(el => el['name'])
        let marks = await res
            .data
            .marks
            .map(el => el['final cie'])
        let sub = conv.parameters.subject
        let sim = stringSimilarity.findBestMatch(sub, subjects)
        let matchedIndex = sim.bestMatchIndex
        console.log(subjects[matchedIndex]+"   "+marks[matchedIndex])

        conv.ask('your marks are ' + marks[matchedIndex])
    })
    return gapp
}
