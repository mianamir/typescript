function test(message) {
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
function do_something() {
    for (let i = 0; i < 5; i++) {
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
let no2;
no2 = 2;
// no2 = true;
// no2 = 'b';
let a;
let b;
let c;
let d;
let e = [4, 5, 6];
let f = [4, true, 'g', false];
// Enums in TypeDcript
const Red = 0;
const Green = 1;
const Blue = 2;
const Orange = 3;
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
    Color[Color["Orange"] = 3] = "Orange";
})(Color || (Color = {}));
;
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
};
// if one line code then this way
let other_log = (message) => console.log(message);
// Inline innotation
let drwa_point = (point) => {
    // ...
};
let drwa_points = (point_a, point_b) => {
    // ...
};
drwa_point({
    x: 1,
    y: 2
});
// To avoid cohesion principle volation use class
class Points {
    // Public, private, protected access modifiers in TS
    // private x: number;
    // private y: number;
    // Typescript class has only one constructor
    constructor(_x, _y) {
        this._x = _x;
        this._y = _y;
        // this.x = x;
        // this.y = y;
        // Ts compiler will initialize the values 
    }
    draw() {
        console.log('X: ' + this._x + ', Y: ' + this._y);
    }
    get_distance(another) {
        // ...
    }
    // Typescript properties 
    get x() {
        return this._x;
    }
    set x(value) {
        if (value < 0) {
            throw new Error('value cannot be less than 0.');
        }
        this._x = value;
    }
}
// class obj
let point = new Points(3, 67);
// point.x =  2;
// point.y = 4;
let x_ = point.x;
point.x = 56;
point.draw();
