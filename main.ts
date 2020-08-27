function test(message){
    console.log(message);
}

// global variable
var message = 'Amir Savvy..';

// call the function
test(message);


// variable 
var no = 44; // JS way
let counter = 0; // TS way

// Example
function do_something(){
    for(let i=0; i < 5; i++){
        console.log(i);

    } // for ends

    // when declaring the variable from var to let then
    // i variable will not avaialble 
    // console.log('Finally:' + i);
} // func ends

do_something();

// Different types in TypeScript
let no1 = 77;
// no1 = 'a';


let no2: number;
no2 = 2;
// no2 = true;
// no2 = 'b';


let a: number;
let b: boolean;
let c: string;
let d: any;
let e: number[] = [4,5,6];
let f: any[] = [4, true, 'g', false];


// Enums in TypeDcript
const Red = 0;
const Green = 1;
const Blue = 2;
const Orange = 3;

enum Color {Red = 0, Green = 1, Blue = 2, Orange = 3};

let bg_color = Color.Orange;
console.log('BG Color: ' + bg_color);


// Type Assersion
let message_;
message_ = 'Amir';
let ends_with_r = (<string>message_).endsWith('r');
let alternatively = (message_ as string).endsWith('r');
console.log('Name ends with R: ' + ends_with_r);











