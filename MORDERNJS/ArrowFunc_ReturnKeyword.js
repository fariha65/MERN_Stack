//basic function stracture
/*function greeting(message){
    alert (`${message} everyone!`)
}

greeting ("Hello")*/

//arrow function
//eta 1 lone e declair kora jay
//jodi 1ta argument pass kori shei khetry ()paranthesis er dorkar nai
//()pranthesis use kora hbe jokhn kono argument thakbena null thakbe or multiple arguments thakle
//return keyword  multiple statement e use hy

/*let greeting = message => alert (`${message} everyone!`)//pass one argument(message) tai () use kora hyni
greeting("Hello")*/

//return keyword use
let createBlog = (title,body) => {
    if(!title){
        //new object()=eitype constractor function create obj er replace e Error nam
        throw new Error("A title is needed")//new instance error
    }
    if(!body){
        throw new Error("Body can't be empty")
    }
    return `${title}-${body}`//if i dont use return it should be show alert "undefined"
}
alert(createBlog("A blog title","This is my first blog"))
