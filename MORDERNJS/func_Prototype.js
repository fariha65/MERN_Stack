function Holiday(destination,days){
this.destination=destination
this.days=days
}
Holiday.prototype.info=function(){
    console.log(`${this.destination} | ${this.days}`)
}
const  {destination,days} = new Holiday("Nepal",30)
//let {destination,days}=nepal
console.log(destination,days)

const australia = new Holiday("australia",7)
console.log(australia.destination,australia.days)