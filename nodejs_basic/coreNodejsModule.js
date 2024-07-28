const http = require("http");//http:/localhost:2002 server e run hbe

const server = http.createServer(function(req,res){
    res.writeHead(200,{"Content-Type":"text/html"});
    res.end("i'm  fariha afrin tamanna.  ");

});

server.listen(2000);