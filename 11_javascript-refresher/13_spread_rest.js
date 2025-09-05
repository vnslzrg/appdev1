//SPREAD OPERATOR   
const numbers = [1, 2, 3];
const student = { name: "Veneese", age: 20 }; 

const newNumbers = [...numbers, 4, 5, 6];
console.log(newNumbers);
const newStudent = { ...student, location: "Pampanga" };
console.log(newStudent);

//REST OPERATOR
function sum(...args) {
    return args.reduce((acc, curr) => acc + curr, 0);
}
console.log(sum(1, 2, 3, 4, 5));
console.log(sum(30, 60, 90));
console.log(sum(100, 200, 300, 400, 500));
console.log(sum());
console.log(sum(9, 18, 27, 36, 45, 54));
