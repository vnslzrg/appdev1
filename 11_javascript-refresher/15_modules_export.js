//EXPORTING A DEFAULT FUNCTION
export default function greet() {
    return "Hello, Welcome to my Github!";
}

//EXPORTING A NAMED FUNCTION
export const studentInfo = {
    name: "Julia",
    age: 20
};
export function getStudentInfo() {
    return `Name: ${studentInfo.name}, Age: ${studentInfo.age}`
}