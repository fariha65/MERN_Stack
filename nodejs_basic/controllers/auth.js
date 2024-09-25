exports.users = (req,res)=>{
    /* res.send('hello from node api')//yhis string not much useful.*/
    res.json({
     users:[
         {
             name :"Fariha",
             age:23,
         },
         {
             name :"Afrin",
             age:21,
         }
 
 
     ],
    });//json data formate -response commonly interecting between client&server. data will be tranfered & sent in between using this json
 };
