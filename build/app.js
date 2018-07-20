const express = require('express')
const app = express()
var path = require("path")

app.use('/css', express.static(path.join(__dirname + '/css')))
app.use('/js', express.static(path.join(__dirname + '/js')))
app.use('/images', express.static(path.join(__dirname + '/images')))
app.use('/font', express.static(path.join(__dirname + '/font')))
app.set('view engine', 'pug')
app.get('/', function (req, res) {
    // res.sendFile(path.join(__dirname + '/index.html'))
    res.render(path.join(__dirname + '/index.pug'), { nama: (req.query.n ? req.query.n : 'Anda'), tempat: (req.query.t ? req.query.t : 'Di Tempat') })
})

app.listen(80, () => console.log('Example app listening on port 80!'))