//DIFFERENCE OR == AND ===
console.log (7 == '7');
console.log(7 === '7');

//VARIABLE UNDEFINED VS NULL
let x;
console.log(x);

x = null;
console.log(x);

//THIS BEHAVE IN A REGULAR FUNCTION AND ARROW FUNCTION
const isStudent = {
    name: 'Veneese',
    greetRegular: function() {
        console.log("Hello, ", this.name);
    },
    greetArrow: () => {
        console.log("Hi, ", this.name);
    }
}
 isStudent.greetRegular();
 isStudent.greetArrow();

 //TWO ARRAYS AND SPREAD OPERATOR
const arr1 = [2, 4, 6, 8];
const arr2 = arr1;
    arr2.push(10);

console.log(arr1);
console.log(arr2);

const arr3 = [...arr1];
const arr4 = arr3;
    arr4.push(12);

console.log(arr3);
console.log(arr4);





