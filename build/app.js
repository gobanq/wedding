const express = require('express')
const app = express()
var path = require("path")

app.use('/css', express.static(path.join(__dirname + '/css')))
app.use('/js', express.static(path.join(__dirname + '/js')))
app.use('/images', express.static(path.join(__dirname + '/images')))
app.use('/font', express.static(path.join(__dirname + '/font')))
app.get('/', (req, res) => res.sendFile(path.join(__dirname + '/index.html')))

app.listen(80, () => console.log('Example app listening on port 80!'))