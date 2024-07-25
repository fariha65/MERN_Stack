/*class Holiday{

    constructor(destination,days){
        this.destination=destination
        this.days=days
    }
    info (){
        console.log(`${this.destination} will take  ${this.days} days`)
    }
}

class Expedition extends Holiday{
    //gear is added
    constructor(destination,days,gear){
        //call super class constructor and pass the name parameter
        super(destination,days)
        this.gear=gear
    }
    info (){
        super.info()
        console.log(`Bring${this.gear}`)
    }
}

const travel=new Expedition("Everest",30,[
    "sunglass",
    "snow boots",
    "camera",
])
travel.info()*/



//use rest operator


class Holiday{

    constructor(destination,days){
        this.destination=destination
        this.days=days
    }
    info (){
        console.log(`${this.destination} will take  ${this.days} days`)
    }
}

class Expedition extends Holiday{
    //gear is added
    constructor(destination,days,gear){
        //call super class constructor and pass the name parameter
        super(destination,days)
        this.gear=gear
    }
    info (){
        super.info()
        const [camera,...rest]=this.gear
        console.log(`Bring ${rest} and ${camera}`)
    }
}

const travel=new Expedition("Everest",30,[
    "sunglass",
    "snow boots",
    "camera",
])
travel.info()