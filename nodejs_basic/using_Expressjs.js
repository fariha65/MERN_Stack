/*const http = require("http");//http:/localhost:2002 server e run hbe

const server = http.createServer(function(req,res){
    res.writeHead(200,{"Content-Type":"text/html"});
    res.end("i'm fariha  ");

});

server.listen(2002);*/

//express
const express = require("express")
const app = express()

/**  get post put delete(http call kore,client side thake diffrent type request recive e use hoy )
 * get-send some kind of response to your clint
 * post- client send some kind of data jeta database e save kore
 * put-update data
 * delete- delete data
*/
app.get('/api',function(req,res){
   /* res.send('hello from node api')//yhis string not much useful.*/
   res.json({
    user:{
        name :"Fariha",
        age:23,
    }
   })//json data formate -response commonly interecting between client&server. data will be tranfered & sent in between using this json
})//get req comming from client side application
//here take 2 arguments -1. /api 1st argument-end point url . 2- 2nd argument callback function(ekhane regular function use korechi.2nd arg handle url)

app.listen(7000,()=> console.log("Server is running on port 7000"))
