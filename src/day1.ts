// 1. type annotations (string, boolean, number, any, undefined , unknown, null)
// 2. array and tuples 
// 3. object type (interface , type)
// 4. funtion type(parameter, return)

// TASK -1 

let username: string = "amlendu";
let age: number = 30;
let isGraduated: boolean = true;
let skills : string[] = ["React", "Node", "Typescript"];

let userTuple: [string, number, boolean]=["amlendu", 30, true];

console.log(username, age, isGraduated,  userTuple, skills);


// TASK-2 Object + Interface

interface User{
    name: string;
    age: number;
    isActive: boolean;
    skills: string[];

}
const person : User= {
    name: "amlendu",
    age: 30,
    isActive: true,
    skills: ["react", "node"]
};

console.log(`this person named ${person.name} is ${person.age} years old`)





// TASK-3 functions

function addNumbers(a: number, b: number): number {
        return a+b;
}
const greet = (user: string): string => {
    return `hello ${user}`;
}
// more modern : arrow function 
const add = (a: number, b: number): number => {
    return a+b ;
}

console.log(add(2,3));
console.log(addNumbers(4,5));
console.log(greet("amlendu"));




//Type-4 Union Types + Type Aliases

type ID = string | number;

const print = (id: ID): void => {
    console.log( `the user is ${id}`);
};

print(101);
print("amlendu");


// Mini-Task: Make a calculateBMI function with type safety
// ✅ Goal: Combine interface + function + control flow + string template.


interface Person{
    name: string;
    weight: number;
    height: number
}

function calculateBMI(person: Person): string{
    const bmi = person.weight/ ( person.height* person.height) ;
    let category: string;

    if (bmi < 18.5) category = "Underweight";
    else if (bmi < 25) category = "Normal";
    else if (bmi < 30) category = "Overweight";
    else category = "Obese";

return `bmi of person is ${(bmi.toFixed(2))} and ${category} `;
}

const person1: Person ={ name: "amlendu", weight: 68, height: 1.71 };
console.log(calculateBMI(person1));
