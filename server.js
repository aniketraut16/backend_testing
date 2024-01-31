const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send("It's Home directory")
})

app.get('/:name', (req, res) => {
    const name = req.params.name;
    res.send(`Your Name is ${name}`)
})

app.get('*', (req, res) => {
    res.status(404).send('Not Found');
});
