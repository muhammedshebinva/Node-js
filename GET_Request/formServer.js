var http=require('http')
var fs=require('fs')
var url=require('url')

http.createServer(function(req,res){

    var q=url.parse(req.url,true)
    q.pathname
    if(q.pathname==='/'){
        fs.readFile('form.html',function(err,data){
            res.writeHead(200,{'Content-Type':'text/html'})
            res.write(data)
            res.end()
        })
    }else if(q.pathname==='/formAction'){
        
        res.writeHead(200,{'Content-Type':'text/html'})
        res.write('<h1>'+q.query.fname+'</h1>')
        res.end()
        //console.log(q.query)
    }else{
        res.writeHead(404,{'Content-Type':'text/html'})
        res.write('error')
        res.end()
    }


}).listen(1000, ()=>console.log('serever Started'))