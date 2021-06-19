var http=require('http')

http.createServer(function(req,res){
    if(req.url==='/'){
        res.write('home')
        res.end()
    }else if(req.url==='/login'){
        res.write('login')
        res.end()
    }else{
        res.writeHead(404,{'Content-Type':'text/html'})
        res.write('error')
        res.end()
    }
    
    
}).listen(7000, () => console.log("Server Started"))