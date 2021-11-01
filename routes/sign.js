
const express = require('express')
const router = express.Router()

router.post('/in', (req, res)=>{
   if(req.body.login=="admin" && req.body.parol=="admin"){
       res.render("admin/create")
   }else{
       res.render("index", {xato:"Login yoki Parol xato"});
       //res.redirect("/")
   }
})

module.exports =router