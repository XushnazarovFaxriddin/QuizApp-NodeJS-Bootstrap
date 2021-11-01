const express = require('express')
const app = express()
const questions=require('../public/js/questions')

const quiz = require('./quiz')
const sign = require('./sign')
const create= require('./create')

app.get('/', function(req, res){
    res.render("index", {xato:""})
})

app.use("/sign", sign)
app.use("/quiz", quiz)
app.use('/create', create)
module.exports = app