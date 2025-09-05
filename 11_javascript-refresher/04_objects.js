//ABOUT ME OBJECT
const aboutMe = {
    name: "Veneese",
    age: 20,
    course: "BSIS",
    introduce: function() {
        console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
    }
};

//ADD A NEW PROPERTY
aboutMe.hobby = "Reading"

console.log(aboutMe)
aboutMe.introduce()
console.log(`My hobby is ${aboutMe.hobby}.`) 


