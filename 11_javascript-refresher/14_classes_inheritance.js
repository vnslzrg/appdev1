class Person {
    constructor(name) {
        this.name = name;
    }
    sayHello() {
        console.log("Hi, I am " + this.name);
    }
}

//SUBCLASS Student EXTENDS Person
class Student extends Person {
    study() {
        console.log(this.name + " is studying");
    }       
}

const student1 = new Student("Veneese");
student1.sayHello();
student1.study();

const person1 = new Person("Julia");
person1.sayHello();







