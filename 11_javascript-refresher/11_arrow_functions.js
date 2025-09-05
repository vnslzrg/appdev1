//NO PARAMETERS
const sayHi = () => {
    console.log("Hi!");
}
sayHi();

//ONE PARAMETER
const greet = name => {
    return "Hello, " + name;
}
console.log(greet("Julia"));

//IMPLICIT RETURN
const square = n => n * n;
console.log(square(7));

