var http=require('http')

http.createServer(function(req,res){
        res.write('shebin')
        res.end()
}).listen(2000)

//ctrl C to quit terminal