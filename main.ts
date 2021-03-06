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
// let ends_with_r = (<string>message_).endsWith('r');
// let alternatively = (message_ as string).endsWith('r');
// console.log(ends_with_r);

// Arrow functions

let do_log = (message) => {
    console.log(message);
}

// if one line code then this way
let other_log = (message) => console.log(message);


// Custom types
// let drwa_point = (point) => {
//     // ...
// }

// drwa_point({
//     x:1,
//     y:2,
//     z:3
// })

// Interface, just like other languages c3, java

// Cohesion Principle
// things are related should be part of one unit

// Interfaces are purely for declarations not
// for implemenation

interface Point{
    x: number,
    y: number
}


// Inline innotation
let drwa_point = (point: Point) => {
    // ...
}

let drwa_points = (point_a: Point, point_b: Point) => {
    // ...
}

drwa_point({
    x:1,
    y:2
})


import { Points } from './point';
 

// class obj

let point = new Points(3, 67);
// point.x =  2;
// point.y = 4;
let x_ = point.getX;
// point.setX = 56;
point.draw();

// Modules













































































