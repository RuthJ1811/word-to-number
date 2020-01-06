const express = require('express')
const { wordsToNumbers } = require('words-to-numbers')

const app = express()

app.use(express.json())

app.post('/', (req, res, next) => {
    res.json({ "res": wordsToNumbers(req.body.msg) })
})

const port = 5000;

app.listen(port, () => {
    console.log("Server started in port 5000")
})