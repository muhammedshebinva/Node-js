const express=require('express')
const app=express()
const path=require('path')
const { fileURLToPath } = require('url')

app.get('/',(req,res)=>
res.sendFile(path.join(__dirname,'home.html')))

app.get('/signup',(req,res)=>
res.sendFile(path.join(__dirname,'signupform.html')))

app.post('/signup',function(req,res){
    res.send('account created')
})

app.listen(1000, ()=> console.log('Server Started'))