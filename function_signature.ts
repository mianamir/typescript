// new_test = Function

// Function Signature Example 1
let function_signature_example_1: (a: string, b: string) => void;

function_signature_example_1 = (name: string, greeting: string) => {
    console.log(`${name} says ${greeting}.`);
}


// Function Signature Example 2
let calc: (a: number, b: number, c: string) => number;

calc = (num1: number, num2: number, action: string) => {
    if (action === 'add'){
        return (num1 + num2);
    }else{
        return (num1 - num2);
    }
}


//  Function Signature Example 3
let log_details_new: (obj: {name: string, age: number}) => void;

type person = {name: string, age: number};

log_details_new = (test: person): void => {
    console.log(`${test.name} is ${test.age} years old.`);
}