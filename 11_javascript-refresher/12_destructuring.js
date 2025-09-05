//OBJECT DESTRUCTURING
const person = {
    name: "Veneese",
    age: 20
};
const { name, age} = person;
console.log (name, age);

//ARRAY DESTRUCTURING
const hobbies = ["watching movies", "reading",  "sleeping"];
const [hobby1, hobby2, hobby3] = hobbies;
console.log(hobby1, hobby2, hobby3);
console.log (hobbies[0],hobbies[1], hobbies[2]);

//PARAMETER DESTRUCTURING
function printName({name}) {
    console.log(name);
}       
printName(person);

