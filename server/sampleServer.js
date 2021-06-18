
var http=require('http')

http.createServer(server).listen(3000)

function server(req,res){
    res.write('shebin')
    res.end()
}