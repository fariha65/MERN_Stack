/*const http = require("http");//http:/localhost:2002 server e run hbe

const server = http.createServer(function(req,res){
    res.writeHead(200,{"Content-Type":"text/html"});
    res.end("i'm fariha  ");

});

server.listen(2002);*/

//express
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const authRoutes = require('./routes/auth');

const app = express();
require("dotenv").config();
//db

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri =process.env.DATABASE;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);





app.use(cors());
app.use(morgan("dev"));

//routes middleware
app.use("/api",authRoutes);

/**  get post put delete(http call kore,client side thake diffrent type request recive e use hoy )
 * get-send some kind of response to your clint
 * post- client send some kind of data jeta database e save kore
 * put-update data
 * delete- delete data
*/
//get req comming from client side application
//here take 2 arguments -1. /api 1st argument-end point url . 2- 2nd argument callback function(ekhane regular function use korechi.2nd arg handle url)

app.listen(7000,()=> console.log("Server is running on port 7000"))
