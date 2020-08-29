// Explicit types
let character: string;
let age: number;
let is_logged_in: boolean;


// age = '20';
age = 20;

// Arrays

let programs: string[] = [];

programs.push('BSCS');

// Union types
let mixed: (string|number|boolean)[] = [];

mixed.push('Amir');
mixed.push(23);
mixed.push(false);

let uid: string|number;

uid = '123';
uid = 123;

// Objects
let test_obj: object;
test_obj = {name: 'test', age: 30};


// Any type
let counter: any = 25;

// age = true;



