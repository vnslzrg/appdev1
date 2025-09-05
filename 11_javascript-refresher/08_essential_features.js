//USING MAP()
hobbies = ['reading', 'gaming', 'coding'];
withMap = hobbies.map(hobby => hobby);  
console.log(withMap); 

//DESTRUCTURING AND SPREAD OPERATOR
const student = { name: 'Alice', age: 20 };
const { name, age } = student;  
console.log(name, age); 
const arr = [1, 2, 3];
const newArr = [...arr, 4, 5];
console.log(newArr);




