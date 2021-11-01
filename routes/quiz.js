const express = require('express')
const router = express.Router()

router.get('/', function (req, res){
    res.render('quiz/index')
})
router.post('/', (req, res)=>{
    res.redirect('/quiz')
})

module.exports =router