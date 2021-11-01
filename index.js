const express = require('express')
const app = express()
const routes = require('./routes/app')
app.use(express.urlencoded({extended: false}))

app.use(express.static('./public'))
app.use(express.json())

app.set('view engine', 'ejs')
app.set('views', './views')

app.use('/', routes)
let ip='localhost';
let port = process.env.PORT || 5000;
app.listen(port,() => {
    console.log(`Dastur http://${ip}:${port} da ishga tushdi`)
})