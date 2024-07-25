/*const Cities = ["Sydeny","Melbourne","Brisbane"]
const [first,...rest]=Cities
console.log("FIRST =>",first)
console.log("REST =>",rest)*/

/*const Cities = ["Sydeny","Melbourne","Brisbane"]
Cities.push("Camberra")
const [first,...rest]=Cities
console.log("FIRST =>",first)
console.log("REST =>",rest)*/

//real world example e ami user k mail r nam show krbo password hide thakbe 
const user={
    name:"Fariha",
    email:"fariha@gmail.com",
    password:"secret",
}
const{password,...rest} = user
console.log(rest)

