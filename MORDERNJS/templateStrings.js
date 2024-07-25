let fname="Fariha"
let lname="Afrin"
let age= prompt("guess Fariha's age..")//input er jonno prompt

//old way
/*let result = fname + " " + lname + " is " + age + " years old"
alert(result)*/

//using template string
let result = `${fname} ${lname} is ${age} years old`
alert(result)