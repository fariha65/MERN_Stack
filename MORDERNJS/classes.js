class Holiday{
    //CONSTRUCTOR FUN AUTOMATICALLY RUN EACH TIME
    //a new instance of holiday is created using new keyword
    constructor(destination,days){
        this.destination=destination
        this.days=days
    }
    info (){
        console.log(`${this.destination} will take  ${this.days} days`)
    }
}

const trip = new Holiday("Kathmandu,Nepal",30)
console.log(trip.info())
//console.log(Holiday.prototype)

const trip2 = new Holiday("Sydney,Australia",7)
console.log(trip2.info())



