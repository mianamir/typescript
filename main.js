"use strict";
exports.__esModule = true;
function test(message) {
    console.log(message);
}
// global variable
var message = 'Amir Savvy..';
// call the function
test(message);
// variable 
var no = 44; // JS way
var counter = 0; // TS way
// Example
function do_something() {
    for (var i = 0; i < 5; i++) {
        console.log(i);
    } // for ends
    // when declaring the variable from var to let then
    // i variable will not avaialble 
    // console.log('Finally:' + i);
} // func ends
do_something();
// Different types in TypeScript
var no1 = 77;
// no1 = 'a';
var no2;
no2 = 2;
// no2 = true;
// no2 = 'b';
var a;
var b;
var c;
var d;
var e = [4, 5, 6];
var f = [4, true, 'g', false];
// Enums in TypeDcript
var Red = 0;
var Green = 1;
var Blue = 2;
var Orange = 3;
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
    Color[Color["Orange"] = 3] = "Orange";
})(Color || (Color = {}));
;
var bg_color = Color.Orange;
console.log('BG Color: ' + bg_color);
// Type Assersion
var message_;
message_ = 'Amir';
// let ends_with_r = (<string>message_).endsWith('r');
// let alternatively = (message_ as string).endsWith('r');
// console.log(ends_with_r);
// Arrow functions
var do_log = function (message) {
    console.log(message);
};
// if one line code then this way
var other_log = function (message) { return console.log(message); };
// Inline innotation
var drwa_point = function (point) {
    // ...
};
var drwa_points = function (point_a, point_b) {
    // ...
};
drwa_point({
    x: 1,
    y: 2
});
var point_1 = require("./point");
// class obj
var point = new point_1.Points(3, 67);
// point.x =  2;
// point.y = 4;
var x_ = point.getX;
// point.setX = 56;
point.draw();
// Modules
