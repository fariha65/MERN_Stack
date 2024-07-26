//basic code.2ta data er moddhy file watch er ta pore print kre
/*const fs =require ("fs")

fs.watch("target.txt",()=>console.log("File changed"))
console.log("Now watching target.txt for file change")*/

//suppose  ami ekta resturent e cashiyer 1ta r kitchene order pass korbe cashiyer kivabe kajkorbe tar jonno  nicher code ta
const fs = require("fs")//file import kore
const filename ="target.txt"//tct file filename cariable e assign 

fs.readFile(filename,(err,data)=>{//requred bit more time
    if(err){
        throw err;
    }
    console.log(data.toString())
})
console.log("Now watching target.txt for file changes.")//execute first
/**
 * 1st customer order meal..jetar process ektu time nibe cashiyer e eta pore run hbe
 * 2nd coustomer oder dhore nei french fri.cashiyer ei order 1st e run hbe*/