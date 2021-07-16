var express=require('express')
var app=express()
var path=require('path')


app.get('/', function(req,res){
    res.sendFile(path.join(__dirname,'home.html'))
})

app.get('/signup',(req,res)=>{
    res.sendFile(path.join(__dirname,'signupform.html'))
})

//to submit data 'post'
app.post('/signup',(req,res)=> {
    res.send('account created')
})

app.listen(3000,function(){
    console.log('Server Created')
})