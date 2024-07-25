/*let thingsToDo = {
  morning:"Exercise",
  afternoon:"work",
  evening:"code",
  night:["Sleep","Dream"],
};

//console.log(thingsToDo.morning)

//distructuring use
let { morning,afternoon,evening,night} =thingsToDo;
//if i chng the value thn i gave the chng value
morning="Run";

console.log(morning);*/


//basic form
/*const uniStudents = (student) => {
    console.log(`${student.fname} is form university of sydney`);
};
uniStudents(
    {
        fname:"Fariha",
        lname:"Afrin"
    }
)*/

//using distracture code minimize 
/*const uniStudents = (student) => {
    let{fname,lname}=student//distructure
    console.log(`${fname} ${lname} is form university of sydney`);
};
uniStudents(
    {
        fname:"Fariha",
        lname:"Afrin"
    }
)*/

//directly use distructure
const uniStudents = ({fname,lname}) => {
    console.log(`${fname} ${lname} is form university of sydney`);
};
uniStudents(
    {
        fname:"Fariha",
        lname:"Afrin"
    }
)