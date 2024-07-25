//this key word represent inter keyword obj
//this keyword window obj
//this keyword onekta arrow func er motoi
//this -this keyword refers to the encolsing context..
//normally within ()scope
//but in javascript old school functions become a par of
//a global window object as soon as you declare them
//similar problem we had using var earlier


//window obj
/*function sayHi(){
    console.log("hi");//go live server & incpect-console-type"window.sayHi();-enter-output-"hi"
}*/

//inter window obj -this
/*function sayHi(){
    console.log(this)
}
sayHi()*/

let australia ={
    cities:["sydmey","Melbone","Adeiaide"],
    printWithDash: function(){
    alert(this.cities.join("-"))
}
}
australia.printWithDash()

